// game.js

// Define the score module
const ScoreModule = (() => {
  let score = 0;
  const scoreElement = document.getElementById('score');

  // Function to increase the score
  const increaseScore = (points) => {
    score += points;
    updateScoreDisplay();
  };

  // Function to update the score display
  const updateScoreDisplay = () => {
    scoreElement.textContent = score;
  };

  // Function to reset the score
  const resetScore = () => {
    score = 0;
    updateScoreDisplay();
  };

  // Return public methods
  return {
    increaseScore,
    resetScore
  };
})();

// Example usage
// Increase the score by 10 points
ScoreModule.increaseScore(10);

// Reset the score
// ScoreModule.resetScore();
