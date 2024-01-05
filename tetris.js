document.addEventListener('DOMContentLoaded', () => {
  const gameBoard = document.getElementById('game-board');
  const scoreElement = document.getElementById('score-value');
  const startButton = document.getElementById('start-button');
  let score = 0;

    // Create game board
    for (let row = 0; row < 20; row++) {
        for (let col = 0; col < 10; col++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        gameBoard.appendChild(cell);
        }
    }

  startButton.addEventListener('click', startGame);

  function startGame() {
    // ゲーム開始時の初期化
    score = 0;
    scoreElement.textContent = score;
    // 他の初期化処理も追加できます

    // ゲームループ開始
    gameLoop();
  }

  function clearTetromino(row, col) {
    for (let i = 0; i < tetromino.length; i++) {
      for (let j = 0; j < tetromino[i].length; j++) {
        const cellIndex = (row + i) * 10 + (col + j);
        const cell = gameBoard.children[cellIndex];
        cell.style.backgroundColor = '';
      }
    }
  }

    // Example: Render a tetromino
    const tetromino = [
        [1, 1, 1],
        [0, 1, 0],
      ];


  function renderTetromino(row, col) {
    for (let i = 0; i < tetromino.length; i++) {
      for (let j = 0; j < tetromino[i].length; j++) {
        const cellIndex = (row + i) * 10 + (col + j);
        const cell = gameBoard.children[cellIndex];
        if (tetromino[i][j] === 1) {
          cell.style.backgroundColor = 'blue';
        }
      }
    }
  }

    // Example: Move the tetromino
    let currentRow = 0;
    let currentCol = 0;
  
    function moveTetromino() {
      clearTetromino(currentRow, currentCol);
      currentRow++;
      renderTetromino(currentRow, currentCol);
    }

  // Example: Set up game loop
  function gameLoop() {
    moveTetromino();
    // Add more game logic here...
    requestAnimationFrame(gameLoop);
  }
});
