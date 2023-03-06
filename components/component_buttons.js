import { setDifficulty } from "../js/game_functions.js";

export function levelButtons () {
    const easyBtn = document.getElementById('easy-btn');
    easyBtn.addEventListener('click', () => {
        setDifficulty('easy');
    });
    
    const mediumBtn = document.getElementById('medium-btn');
    mediumBtn.addEventListener('click', () => {
        setDifficulty('medium');
    });
    
    const hardBtn = document.getElementById('hard-btn');
    hardBtn.addEventListener('click', () => {
        setDifficulty('hard');
    });

    const worldCover = document.getElementById('worldCover');
    hardBtn.addEventListener('click', () => {
        setDifficulty('worldCover');
    });
}
