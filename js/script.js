let canvas = document.getElementById('snake');
let context = canvas.getContext('2d');
let box = 32;
let snake = [];
snake[0] = {
    x: 4 * box,
    y: 4 * box,
}

function createBG() {
    context.fillStyle = 'lightgreen';
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function createSnake() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = 'tomato';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

createBG();
createSnake()