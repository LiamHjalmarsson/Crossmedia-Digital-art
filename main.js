import { user } from "./js/game_user.js";
import { gameInfo } from "../js/game_info.js"; 
import { checkItemAt, placeAppleAt, getRandomPosition } from "./js/game_functions.js"

function startOfGame () {
    user();
    checkItemAt(...gameInfo.startPoint);
    placeAppleAt(...getRandomPosition())
}

startOfGame();