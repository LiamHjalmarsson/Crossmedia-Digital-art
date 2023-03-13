import { startOfNewGame, worldFullScreen } from '../components/component_checkboxs.js';
import { gameInfo } from './info.js';
import { user } from './user.js';

export function getItemAt (x, y) {
    let rows = document.querySelectorAll('.row');
    return rows[y - 1].children[x-1]
};

export function checkItemAt (x, y) {
    return getItemAt(x, y).checked = true;
} 

export function unCheckItemAt (x, y) {
    return getItemAt(x, y).checked = false;
} 

export function placeAppleAt (x, y) {
    getItemAt(x, y).type = "radio";
    checkItemAt(x, y);
}

export function removeAppleAt (x, y) {
    getItemAt(x, y).type = "checkbox";
    unCheckItemAt(x, y);
}

export function getApplePosition () {
    let position = [1, 1];

    let rows = document.querySelectorAll('.row');

    rows.forEach((row, indexRow) => {
        Array.from(row.children).forEach((input, indexInput) => {
            if (input.type === "radio") {
                position[0] = indexInput + 1;
                position[1] = indexRow + 1;
            }
        });
    });

    return position;
}

export function getRandomPosition () {
    let freePositions = [];

    let rows = document.querySelectorAll('.row');

    rows.forEach((row, indexRow) => {
        Array.from(row.children).forEach((input, indexInput) => {
            if (input.type === "checkbox" && input.checked === false) {
                freePositions.push([indexInput + 1, indexRow + 1]);
            }
        });
    });

    const index = Math.floor(Math.random() * (freePositions.length) - 1) + 1;

    return freePositions[index];
}

export function setDifficulty(difficulty) {

    let postion = randomMath();

    switch (difficulty) {
        case "medium":
            gameInfo.speed = 15
            gameInfo.snake = [[postion, postion]]
            gameInfo.startPoint = [postion, postion]
            startOfNewGame(gameInfo)
        break;
            
        case "hard": 
            gameInfo.speed = 20
            gameInfo.snake = [[postion, postion]]
            gameInfo.startPoint = [postion, postion]
            startOfNewGame(gameInfo)
        break;
            
        case "brutal": 
            gameInfo.speed = 30
            gameInfo.snake = [[postion, postion]]
            gameInfo.startPoint = [postion, postion]
            startOfNewGame(gameInfo)
            
        break;
            
        case "worldCover": 
            gameInfo.worldSize = 30;
            gameInfo.speed = 20
            gameInfo.snake = [[postion, postion]]
            gameInfo.startPoint = [postion, postion]
            worldFullScreen(gameInfo);
        break;
    }

    clearInterval(gameInfo.moveInterval);
    randomMath()
    user();
    checkItemAt(...gameInfo.startPoint);
    placeAppleAt(...getRandomPosition());
}

function randomMath () {
    return Math.round(Math.random() * 20);
}