const matrix = document.getElementById('main-matrix').children;
const chartCanvas = document.getElementById('pieces-chart');
const timerLabel = document.getElementById('timer');
const timerButton = document.getElementById('timer-button');

const COLOR = {
    white: 'w',
    black: 'b'
};
const PIECE = {
    pawn: 'p',
    rook: 'r',
    knight: 'n',
    bishop: 'b',
    queen: 'q',
    king: 'k'
};

let timer = null;
let timerDate = new Date(0);

let piecesList = [
    new ChessPiece(COLOR.white, PIECE.rook, 1, 1),
    new ChessPiece(COLOR.white, PIECE.king, 1, 4),
    new ChessPiece(COLOR.white, PIECE.queen, 1, 5),
    new ChessPiece(COLOR.white, PIECE.bishop, 1, 6),
    new ChessPiece(COLOR.white, PIECE.knight, 1, 7),
    new ChessPiece(COLOR.white, PIECE.rook, 1, 8),
    new ChessPiece(COLOR.white, PIECE.pawn, 2, 1),
    new ChessPiece(COLOR.black, PIECE.bishop, 2, 3),
    new ChessPiece(COLOR.white, PIECE.knight, 2, 4),
    new ChessPiece(COLOR.white, PIECE.pawn, 2, 6),
    new ChessPiece(COLOR.white, PIECE.pawn, 2, 7),
    new ChessPiece(COLOR.white, PIECE.pawn, 2, 8),
    new ChessPiece(COLOR.white, PIECE.pawn, 3, 3),
    new ChessPiece(COLOR.black, PIECE.pawn, 3, 5),
    new ChessPiece(COLOR.white, PIECE.bishop, 3, 7),
    new ChessPiece(COLOR.white, PIECE.pawn, 4, 1),
    new ChessPiece(COLOR.black, PIECE.knight, 4, 4),
    new ChessPiece(COLOR.white, PIECE.pawn, 5, 4),
    new ChessPiece(COLOR.black, PIECE.pawn, 5, 5),
    new ChessPiece(COLOR.black, PIECE.pawn, 7, 1),
    new ChessPiece(COLOR.black, PIECE.pawn, 7, 2),
    new ChessPiece(COLOR.black, PIECE.pawn, 7, 3),
    new ChessPiece(COLOR.black, PIECE.pawn, 7, 6),
    new ChessPiece(COLOR.black, PIECE.pawn, 7, 7),
    new ChessPiece(COLOR.black, PIECE.pawn, 7, 8),
    new ChessPiece(COLOR.black, PIECE.rook, 8, 1),
    new ChessPiece(COLOR.black, PIECE.king, 8, 4),
    new ChessPiece(COLOR.black, PIECE.bishop, 8, 6),
    new ChessPiece(COLOR.black, PIECE.knight, 8, 7),
    new ChessPiece(COLOR.black, PIECE.rook, 8, 8)
];

let piecesCount = Object.keys(PIECE).map(enumPiece => piecesList.filter(piece => piece.type === PIECE[enumPiece]).length);

let piecesChart = new Chart(chartCanvas, {
    type: 'horizontalBar',
    data: {
        labels: ['Pawn', 'Rook', 'Knight', 'Bishop', 'Queen', 'King'],
        datasets: [
            {
                data: piecesCount,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 159, 64, 0.8)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Chess statistics',
            fontSize: 40,
            fontColor: '#e5e5e5'
        },
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                gridLines: {
                    color: 'rgb(255, 255, 255, 0.5)'
                },
                ticks: {
                    fontColor: '#e5e5e5',
                    fontSize: 20,
                }
            }],
            xAxes: [{
                gridLines: {
                    color: 'rgb(255, 255, 255, 0.5)'
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Pieces count',
                    fontColor: '#c9c9c9',
                    fontSize: 24
                },
                ticks: {
                    fontColor: '#e5e5e5',
                    fontSize: 18,
                    beginAtZero: true
                }
            }]
        }
    }
});

function onLoad() {
    for (const piece of piecesList) {
        matrix[piece.row - 1].children[piece.col].appendChild(piece.image);
    }
}

function signUp() {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const country = document.getElementById("country");
    const alertPassword = document.getElementById("alert-password");
    const alertCountry = document.getElementById("alert-country");
    let success = true;
    
    if (password.value != confirmPassword.value) {
        showBlock(alertPassword);
        success = false;
    }
    else {
        hideBlock(alertPassword);
    }

    if (country.value == "0") {
        showBlock(alertCountry);
        success = false;
    }
    else {
        hideBlock(alertCountry);
    }

    if (success) {
        alert("Successful registration!");
    }
    
    return success;
}

function showBlock(block) {
    block.style.display = "flex";
}

function hideBlock(block) {
    block.style.display = "none";
}

function startTimer() {
    if (timer == null) {
        timerLabel.innerHTML = '00:00';
        timerButton.innerHTML = 'Stop';
        timer = setInterval(() => {
            timerDate.addSeconds(1);
            timerLabel.innerHTML = timerDate.toString('mm:ss');
        }, 1000);
    }
    else {
        timerButton.innerHTML = 'Start';
        clearTimeout(timer);
        timer = null;
        timerDate.setTime(0);
    }
}

onLoad();