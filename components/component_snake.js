
export function snakeAnimation (points) {

    let header = document.querySelector("section");
    let div = document.createElement("div");
    
    if (points % 5 === 1) {
        div.classList.add(`snake`);
        header.append(div)   
    } 
    // else if (points >= 1) {
    //     div.classList.add(`line`);

    //     document.body.append(div)   
    // }
}