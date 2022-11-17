import {Viewport} from './utility/Viewport.js';
import {Keyboard} from './utility/Keyboard.js';
import {Timer} from './utility/Timer.js';
import {World} from './world/World.js';
import {Player} from './entity/brain/Player.js';
import {Mantis} from './entity/bug/Mantis.js';

export class Game {
    #viewport;
    #world;
    #keyboard;
    #tickerTimer;

    start() {
        // Initialize main game components
        let canvas = document.getElementById('gameCanvas');
        this.#viewport = new Viewport(canvas);
        this.#world = new World();

        // Hook up components
        this.#viewport.setWorld(this.#world);

        // Add player-controlled Mantis
        this.#keyboard = new Keyboard();
        let player = new Player();
        player.setKeyboard(this.#keyboard);
        let playerMantis = new Mantis();
        playerMantis.getLocation().setY(100);
        playerMantis.setBrain(player);
        this.#world.addEntity(playerMantis);

        // Set up tick loop
        let game = this;
        this.#tickerTimer = new Timer(function() { game.onTick(); }, 50);

        // Set up event listeners
        window.addEventListener('resize', function() { game.onCanvasResize(); });
        window.addEventListener('blur', function() { game.onBlur(); });
        window.addEventListener('focus', function() { game.onFocus(); });
        window.addEventListener('keydown', function(event) { game.onKeyDown(event); });
        window.addEventListener('keyup', function(event) { game.onKeyUp(event); });
    }

    onCanvasResize() {
        this.#viewport.resize();
    }

    onTick() {
        this.#world.tick();
    }

    onBlur() {
        this.pauseGame();
    }

    onFocus() {
        this.resumeGame();
    }

    onKeyDown(event) {
        this.#keyboard.onKeyDown(event.key);
    }

    onKeyUp(event) {
        this.#keyboard.onKeyUp(event.key);
    }

    pauseGame() {
        this.#tickerTimer.pause();
        this.#keyboard.clear();
    }

    resumeGame() {
        this.#tickerTimer.resume();
        this.#keyboard.clear();
    }
}