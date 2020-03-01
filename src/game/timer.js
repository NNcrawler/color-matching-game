module.exports = class Timer{
  constructor(time) {
    this.time = time;
    this.timeTickObserver = [];
    this.timeOverObserver = [];
  }
  
  registerTimeTickObserver(func) {
    this.timeTickObserver.push(func);
  }

  registerTimeOverObserver(func) {
    this.timeOverObserver.push(func);
  }

  start() {
    this.tick();
  }

  tick() {
    setTimeout(() => {
      this.timeTickObserver.forEach(func => func(this.time));
      if (this.time > 0) {
        this.tick();
      } else {
        this.timeOverObserver.forEach(func => func());
      }
      this.time --;
    }, 1000);
  }
}
