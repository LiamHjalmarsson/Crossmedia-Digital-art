export function generatePlayGround (gameInfo) {

    let container = document.createElement("div");

    for (let row = 0; row < gameInfo.worldSize; row++) {

        let row = document.createElement('div');
    
        row.classList.add('row');
        
        for (let column = 0; column < gameInfo.worldSize; column++) {
            let input = document.createElement('input');
    
            input.type = 'checkbox';

            input.addEventListener("click", () => {

            })
    
            row.appendChild(input);
        }
    
        container.appendChild(row);
    }

    document.querySelector("main").append(container);

}
