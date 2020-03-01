const STATE = {
  NOT_PLAYING: "not_playing",
  PLAYING: "playing",
  MATCHING: "matching"
}

module.exports = class Game {
  constructor(score, timer, matcher) {
    this.matcher = matcher;
    this.score = score;
    this.timer = timer;
    this.gameOverObserver = [];
    this.state = STATE.NOT_PLAYING;
  }

  start() {
    this.matcher.retisterAllMatchObserver(() => this.gameOver());
    this.timer.registerTimeOverObserver(() => this.gameOver());
    this.timer.start();
    this.state = STATE.PLAYING;
  }

  match(color) {
    if (this.state === STATE.MATCHING) {
      if (this.matcher.match(color)) {
        this.score.increment();
      }
      this.state = STATE.PLAYING;
    } else if(this.state === STATE.PLAYING) {
      this.matcher.setComparison(color);
      this.state = STATE.MATCHING;
    }
  }

  registerTimeTickObserver(func) {
    this.timer.registerTimeTickObserver(func);
  }

  registerPointChangeObserver(func) {
    this.score.registerObserver(func);
  }

  registerGameOverObserver(func) {
    this.gameOverObserver.push(func);
  }

  gameOver() {
    this.state = STATE.NOT_PLAYING;
    this.gameOverObserver.forEach(func => func(this.score.get()));
  }
}
