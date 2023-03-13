import { removeAppleAt, getApplePosition } from "../js/game.js";

export function generatePlayGround (gameInfo) {

    let container = document.createElement("div");

    for (let row = 0; row < gameInfo.worldSize; row++) {

        let row = document.createElement('div');
    
        row.classList.add('row');
        
        for (let column = 0; column < gameInfo.worldSize; column++) {
            let input = document.createElement('input');
    
            input.type = 'checkbox';

            input.addEventListener("click", () => {
                removeAppleAt(...getApplePosition());
                input.type = "radio";
            })
    
            row.appendChild(input);
        }
    
        container.appendChild(row);
    }

    document.querySelector("main").append(container);

}

export function startOfNewGame (gameInfo) {
    document.querySelector("main").innerHTML = "";
    generatePlayGround(gameInfo)
}

export function worldFullScreen (gameInfo) {
    document.querySelector("main").innerHTML = "";
    document.querySelector("header").innerHTML = "";
    generatePlayGround(gameInfo);
    document.querySelector("main > div").classList.add("fullScreenDiv"); 
    document.querySelectorAll("div > .row").forEach(div => div.classList.add("fullScreen"));
}

