const Timer = require('./timer');
const Score = require('./score');
const Matcher = require('./matcher');
const Game = require('./game');

module.exports = {
  createTimeAttack() {
    const colorSet = new Set([
      'wheat', 'red', 'green',
      'cyan', 'brown', 'gold']);
    const timer = new Timer(3);
    const score = new Score();
    const matcher = new Matcher(colorSet);
    return new Game(score, timer, matcher);
  }
}
