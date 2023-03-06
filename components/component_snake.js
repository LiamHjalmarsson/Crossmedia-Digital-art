
export function snakeAnimation (game_info) {

    let header = document.querySelector("header");
    let container = document.createElement("div");

        if (game_info < 10) {
            let div = document.createElement("div");
            div.classList.add("snake");
            
            container.append(div)   
        }

    header.append(container)
}