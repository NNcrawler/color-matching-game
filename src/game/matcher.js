module.exports = class Matcher {
  constructor(colorSet) {
    this.colorSet = colorSet;
    this.comparison = new Set();
    this.matchedColor = 0;
    this.allMatchObserver = [];
  }

  match(color) {
    let isMatch = this.comparison.has(color);
    if (isMatch) {
      this.matchedColor ++;
      if (this.matchedColor >= this.colorSet.size) {
        this.allMatchObserver.forEach(func => func());
      }
    }
    return isMatch;
  }

  setComparison(color) {
    this.comparison.add(color);
  }

  retisterAllMatchObserver(func) {
    this.allMatchObserver.push(func);
  }
}
