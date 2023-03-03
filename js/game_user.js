import { gameInfo } from "../js/game_info.js"; 
import { getApplePosition, checkItemAt, getItemAt, unCheckItemAt, placeAppleAt, getRandomPosition, removeAppleAt } from "./game_functions.js";

export function user () {

    document.addEventListener("keydown", (e) => {

        if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
            gameInfo.movingDirection = gameInfo.movingDirection === 'right' ? 'right' : 'left';
        } else if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
            gameInfo.movingDirection = gameInfo.movingDirection === 'left' ? 'left' : 'right';
        } else if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
            gameInfo.movingDirection = gameInfo.movingDirection === 'down' ? 'down' : 'up'; 
        } else if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
            gameInfo.movingDirection = gameInfo.movingDirection === 'up' ? 'up' : 'down';
        }

    });

    gameInfo.moveInterval = setInterval(() => {
        move(gameInfo.movingDirection || "right");
    }, 10000 / gameInfo.speed);

}

function move (direction) {
    let postionAppel = getApplePosition();

    // console.log(gameInfo.snake)
    let snake = gameInfo.snake;
    let snakeHead = [...snake[0]];
    console.log("1", snakeHead)
    let snakeTail = snake;
    console.log(snakeTail)
    
    let updateSnake = () => {
        snake.unshift(snakeHead);
        console.log("3", snake.unshift(snakeHead))
        snake.pop();
        console.log("4", snake.pop())
        
        snake.forEach(snakePart => {
            console.log("5", snakePart)
            checkItemAt(...snakePart)
        });
    }

    switch (direction) {
        case 'up':    snakeHead[1] = snakeHead[1] === 1 ? gameInfo.worldSize : snakeHead[1] - 1; break;
        case 'down':  snakeHead[1] = snakeHead[1] === gameInfo.worldSize ? 1 : snakeHead[1] + 1; break;
        case 'left':  snakeHead[0] = snakeHead[0] === 1 ? gameInfo.worldSize : snakeHead[0] - 1; break;
        case 'right': snakeHead[0] = snakeHead[0] === gameInfo.worldSize ? 1 : snakeHead[0] + 1; break;
    }

    if (getItemAt(...snakeHead).type === 'checkbox' && getItemAt(...snakeHead).checked) {
        document.querySelector('body').innerText = 'Game Over...';
        document.querySelectorAll('input').forEach(input => input.disabled = true);

        clearInterval(gameInfo.moveInterval);
    }

    if (snakeHead[0] === postionAppel[0] && snakeHead[1] === postionAppel[1]) {
        snake.push(snakeTail);

        placeAppleAt(...getRandomPosition());
        removeAppleAt(...postionAppel);
        
        increaseScore();

        updateSnake();
    } else {
        updateSnake();
        unCheckItemAt(...snakeTail);
    }
}

