module.exports = class Score {
  constructor() {
    this.point = 0;
    this.observer = [];
  }

  increment() {
    this.point ++;
    this.observer.forEach(func => func(this.point));
  }

  get() {
    return this.point;
  }

  registerObserver(func) {
    this.observer.push(func);
  }
}
