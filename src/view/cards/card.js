module.exports = class Card {
  constructor(element, colorCardClass) {
    this.element = element;
    this.isClosed = true;
    this.colorCardClass = colorCardClass;
  }

  flip() {
    if (this.isClosed) {
      this.element.classList.remove(this.colorCardClass, 'flip-card-back')
      this.element.classList.add(this.colorCardClass);
      this.isClosed = false;
      return;
    }
    this.element.classList.add('flip-card-back')
    this.isClosed = true
  }
}
