/**
 * Manages a single timer that calls a function periodically, repeating until
 * cancelled.
 *
 * Can be paused, will act as if the timer is continuing but won't run repeatedly while paused.
 */
export class Timer {
    #id = null;
    #callback = null;
    #interval = 0;
    #lastRun = null;

    constructor(callback, interval) {
        this.#interval = interval;
        this.#callback = callback;
        this.start();
    }

    start() {
        if (this.#id == null) {
            this.#schedule(this.#interval)
        }
    }

    #schedule(interval) {
        let timer = this;
        this.#lastRun = new Date();
        this.#id = setTimeout(function() {
            try {
                timer.#callback();
            } catch (ex) {
                timer.#schedule();
                throw ex;
            }
            timer.#schedule();
        }, interval);
    }

    pause() {
        if (this.#id != null) {
            clearTimeout(this.#id);
            this.#id = null;
        }
    }

    resume() {
        if (this.#id == null) {
            if (this.#lastRun != null) {
                let now = new Date();
                let timePassed = now - this.#lastRun;
                this.#schedule(this.#interval - timePassed);
            } else {
                this.start();
            }
        }
    }
}