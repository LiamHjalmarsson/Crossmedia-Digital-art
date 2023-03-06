import { generatePlayGround } from '../components/component_checkboxs.js';
import { gameInfo } from './game_info.js';
import { user } from './game_user.js';

generatePlayGround()

let rows = document.querySelectorAll('.row');

export function getItemAt (x, y) {
    return rows[y - 1].children[x-1]
};

export function checkItemAt (x, y) {
    console.log(x, y, "checkItemAt")
    return getItemAt(x, y).checked = true;
} 

export function unCheckItemAt (x, y) {
    console.log(x, y, "unCheckItemAt")
    return getItemAt(x, y).checked = false;
} 

export function placeAppleAt (x, y) {
    console.log(x, y, "placeAppleAt")
    getItemAt(x, y).type = "radio";
    checkItemAt(x, y);
}

export function removeAppleAt (x, y) {
    getItemAt(x, y).type = "checkbox";
    unCheckItemAt(x, y);
}

export function getApplePosition () {
    let position = [1, 1];

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

    switch (difficulty) {
        case "easy":
            game_difficulty
            gameInfo.speed = 6
        break;
            
        case "medium": 
            gameInfo.speed = 10
        break;

        case "hard": 
            gameInfo.speed = 15
        break;
    }

    clearInterval(gameInfo.moveInterval);

    user();
}

