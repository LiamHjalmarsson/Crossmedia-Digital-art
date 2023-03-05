
export function snakeAnimation (game_info) {

    let header = document.querySelector("header");
    let container = document.createElement("div");

    for ( let i = 0; i < game_info; i++) {

        if (i < 10) {
            let div = document.createElement("div");
            div.classList.add(`snake${i}`, "snake");
            
            container.append(div)   
        }
            if (i > 10) {
                
        }

    }
    
    header.append(container)
}