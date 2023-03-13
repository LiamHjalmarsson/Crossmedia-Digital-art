import { setDifficulty } from "../js/game.js";
import { gameInfo } from "../js/info.js";

export function levelButtons () {
    button("medium");
    button("hard");
    button("brutal");
    button("worldCover");
}

function button (difficulty) {
    let button = document.createElement("button");
    
    button.textContent = difficulty;
    button.addEventListener("click", () => {
        gameInfo.level = difficulty;
        setDifficulty(difficulty);
    });

    document.querySelector("header").append(button);
}