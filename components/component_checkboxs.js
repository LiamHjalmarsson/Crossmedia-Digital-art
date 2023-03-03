import { gameInfo } from "../js/game_info.js"; // import to import the things that you have exported 

// export functions to make code more readable and organiste
export function generateWorld () {

    let container = document.createElement("div");

    for (let row = 0; row < gameInfo.worldSize; row++) {
        
        let row = document.createElement('div');
    
        row.classList.add('row');
        
        for (let column = 0; column < gameInfo.worldSize; column++) {
            let input = document.createElement('input');
    
            input.type = 'checkbox';
    
            row.appendChild(input);
        }
    
        container.appendChild(row);
    }

    document.querySelector("main").append(container);
    
}
