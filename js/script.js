// ==================== CONSTANTS ==================== //
const STATUS_DISPLAY = document.querySelector('.game-notification'),
    GAME_STATE = ["", "", "", "", "", "", "", "", ""],
    WINNINGS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ],
    WIN_MESSAGE = () => `El jugador ${currentPlayer} ha ganado!`,
    DRAW_MESSAGE = () => `El juego ha terminado en empate!`,
    CURRENT_PLAYER_TURN = () => `Turno del jugador ${currentPlayer}`

// ==================== VARIABLES ==================== //
let gameActive = true;
let currentPlayer = "O";

// ==================== FUNCTIONS ==================== //
function main(){
    handStatusDisplay(CURRENT_PLAYER_TURN);
    listeners();
};

main();

function handStatusDisplay (message){
    STATUS_DISPLAY.innerHTML = message;
};

function listeners(){
    document.querySelector('.game-container').addEventListener('click', handleCellClick);
    document.querySelector('game-restart').addEventListener('click', handleRestartGame);
};

function handleCellClick(clickedEvent){
    const clickedCell = clickedEvent.target;
    if(clickedCell.classList.contains('game-cell')){
        const clickedCellIndex = Array.from(clickedCell.parentNode.children).indexOf(clickedCell)
        console.log(clickedCellIndex)
        if(GAME_STATE[clickedCellIndex] !="" || !gameActive){
            return;
        };
        handleCellPlayed(clickedCell, clickedCellIndex);
        handleResultValidation();

    };
    console.log(clickedCell);
};

function handleCellPlayed(clickedCell, clickedCellIndex){
    GAME_STATE[clickedCellIndex] = currentPlayer;
    clickedCell.innerText = currentPlayer;
};

function handleResultValidation(){
    let roundWon = false;
    for(let i = 0; i < WINNINGS.length){

    };
};


