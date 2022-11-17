import {Game} from './game.js';

function onReady() {
    let game = new Game();
    game.start();
}
document.addEventListener('DOMContentLoaded', onReady);