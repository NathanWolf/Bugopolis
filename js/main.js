let _globalContext = {
    viewport: null,
    stage: null,
    tickTimer: null
}

function onReady() {
    // Initialize main game components
    let canvas = document.getElementById('gameCanvas');
    _globalContext.viewport = new Viewport(canvas);
    _globalContext.stage = new Stage();

    // Hook up components
    _globalContext.viewport.setStage(_globalContext.stage);

    // Temporarily add a Wanderer for testing
    _globalContext.stage.addActor(new Wanderer());

    // Set up tick loop
    _globalContext.tickerTimer = new Timer(onTick, 50);

    // Set up event listeners
    window.addEventListener('resize', onCanvasResize);
    window.addEventListener('blur', onBlur);
    window.addEventListener('focus', onFocus);
}

function onCanvasResize() {
    _globalContext.viewport.resize();
}

function onTick() {
    _globalContext.stage.tick();
}

function onBlur() {
    pauseGame();
}

function onFocus() {
    resumeGame();
}

function pauseGame() {
    _globalContext.tickerTimer.pause();
}

function resumeGame() {
    _globalContext.tickerTimer.resume();
}