const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const backgroundSelector = document.getElementById('background-selector');
const startButton = document.getElementById('start-button');

let stars = [];
let starSpeed = 2;
let spaceship = { x: canvas.width / 2, y: canvas.height - 50, width: 50, height: 50 };

function init() {
    for (let i = 0; i < 100; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1
        });
    }
}

function drawStars() {
    ctx.fillStyle = 'white';
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        star.y += starSpeed;
        if (star.y > canvas.height) star.y = 0;
    });
}

function drawSpaceship() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(spaceship.x, spaceship.y, spaceship.width, spaceship.height);
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStars();
    drawSpaceship();
    requestAnimationFrame(update);
}

backgroundSelector.addEventListener('change', (e) => {
    canvas.style.backgroundImage = `url('${e.target.value}')`;
});

startButton.addEventListener('click', () => {
    init();
    update();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && spaceship.x > 0) spaceship.x -= 10;
    if (e.key === 'ArrowRight' && spaceship.x < canvas.width - spaceship.width) spaceship.x += 10;
    if (e.key === 'ArrowUp' && spaceship.y > 0) spaceship.y -= 10;
    if (e.key === 'ArrowDown' && spaceship.y < canvas.height - spaceship.height) spaceship.y += 10;
});
