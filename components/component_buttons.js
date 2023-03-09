import { setDifficulty } from "../js/game_functions.js";

export function levelButtons () {
    button("easy");
    button("medium");
    button("hard");
    button("worldCover");
}

function button (difficulty) {
    let button = document.createElement("button");
    
    button.textContent = difficulty;
    button.addEventListener("click", () => {
        setDifficulty(difficulty);
    });

    document.querySelector("header").append(button);
}