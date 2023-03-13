import { user } from "./js/user.js";
import { generatePlayGround } from "./components/component_checkboxs.js";
import { gameInfo } from "./js/info.js"; 
import { checkItemAt, placeAppleAt, getRandomPosition } from "./js/game.js"
import { levelButtons } from "./components/component_buttons.js";

function start () {
    levelButtons();
    generatePlayGround(gameInfo);   
    user();
    checkItemAt(...gameInfo.startPoint);
    placeAppleAt(...getRandomPosition());
}

start();
