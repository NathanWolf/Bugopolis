let _globalContext = {
    viewport: null,
    world: null,
    player: null,
    tickTimer: null,
    keyboard: null
}

function onReady() {
    // Initialize main game components
    let canvas = document.getElementById('gameCanvas');
    _globalContext.viewport = new Viewport(canvas);
    _globalContext.world = new World();

    // Hook up components
    _globalContext.viewport.setWorld(_globalContext.world);

    // Add player-controlled Mantis
    _globalContext.keyboard = new Keyboard();
    _globalContext.player = new Player();
    _globalContext.player.setKeyboard(_globalContext.keyboard);
    let playerMantis = new Mantis();
    playerMantis.getLocation().setY(100);
    playerMantis.setBrain(_globalContext.player);
    _globalContext.world.addEntity(playerMantis);

    // Set up tick loop
    _globalContext.tickerTimer = new Timer(onTick, 50);

    // Set up event listeners
    window.addEventListener('resize', onCanvasResize);
    window.addEventListener('blur', onBlur);
    window.addEventListener('focus', onFocus);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
}

function onCanvasResize() {
    _globalContext.viewport.resize();
}

function onTick() {
    _globalContext.world.tick();
}

function onBlur() {
    pauseGame();
}

function onFocus() {
    resumeGame();
}

function onKeyDown(event) {
    _globalContext.keyboard.onKeyDown(event.key);
}

function onKeyUp(event) {
    _globalContext.keyboard.onKeyUp(event.key);
}

function pauseGame() {
    _globalContext.tickerTimer.pause();
    _globalContext.keyboard.clear();
}

function resumeGame() {
    _globalContext.tickerTimer.resume();
    _globalContext.keyboard.clear();
}