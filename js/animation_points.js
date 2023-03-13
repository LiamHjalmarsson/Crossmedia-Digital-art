export function animationPoints (gameInfo) {

    if (gameInfo.points === 5 || gameInfo.points === 10) {
        document.querySelector("main > div").classList.add("roll");
    } else {
        document.querySelector("main > div").classList.remove("roll");
    }

}