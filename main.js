import { user } from "./js/game_user.js";
import { gameInfo } from "../js/game_info.js"; 
import { checkItemAt, placeAppleAt, getRandomPosition } from "./js/game_functions.js"
import { levelButtons } from "./components/component_buttons.js";

export function startOfGame () {
    user();
    checkItemAt(...gameInfo.startPoint);
    placeAppleAt(...getRandomPosition());
    levelButtons();
}

startOfGame();