import { gameInfo } from "../js/info.js"; 
import { getApplePosition, checkItemAt, getItemAt, unCheckItemAt, placeAppleAt, getRandomPosition, removeAppleAt } from "./game.js";
import { animationPoints } from "./animation_points.js";

export function user () {
    
    document.addEventListener("keydown", (e) => {
        gameInfo.startMove = true;

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

        if (gameInfo.startMove)
        {
            move(gameInfo.movingDirection || "right");
        }

    }, 1000 / gameInfo.speed);

}

function move (direction) {
    
    let positionApple = getApplePosition();
    
    let snake = gameInfo.snake;
    let snakeHead = [...snake[0]];
    let snakeTail = [...snake[snake.length - 1]];
    
    function updateSnake () {

        snake.unshift(snakeHead);
        snake.pop();
        
        snake.forEach(snakePart => {
            checkItemAt(...snakePart)
        });

    }

    if (direction === "up") {
        snakeHead[1] = snakeHead[1] === 1 ? gameInfo.worldSize : snakeHead[1] - 1;
    } else if ( direction === "down" ) {
        snakeHead[1] = snakeHead[1] === gameInfo.worldSize ? 1 : snakeHead[1] + 1;
    } else if (direction === "left") {
        snakeHead[0] = snakeHead[0] === 1 ? gameInfo.worldSize : snakeHead[0] - 1;
    } else {
        snakeHead[0] = snakeHead[0] === gameInfo.worldSize ? 1 : snakeHead[0] + 1;
    }

    if ( getItemAt(...snakeHead).type === 'checkbox' && getItemAt(...snakeHead).checked ) {

        document.querySelectorAll('input').forEach(input => input.disabled = true);

        document.querySelector("header").innerHTML = "<h1> Game over </h1>"

        clearInterval(gameInfo.moveInterval);

    }

    if (snakeHead[0] === positionApple[0] && snakeHead[1] === positionApple[1]) {
        snake.push(snakeTail);
        gameInfo.points += 1;

        if (gameInfo.level === "brutal") {
            animationPoints(gameInfo)
        } 

        placeAppleAt(...getRandomPosition());
        removeAppleAt(...positionApple);
        
        updateSnake();

    } else {

        updateSnake();
        unCheckItemAt(...snakeTail);
    
    }
}

