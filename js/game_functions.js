import { generatePlayGround } from '../components/component_checkboxs.js';

generatePlayGround()

let rows = document.querySelectorAll('.row');

export function user () {

    document.addEventListener("keydown", (e) => {

        if (e.key === "ArrowLeft") {
            console.log(e.key)
        } else if (e.key === "ArrowRight") {
            console.log(e.key)
        } else if (e.key === "ArrowUp") {
            console.log(e.key)
        } else if (e.key === "ArrowDown") {
            console.log(e.key)
        }
    })

}