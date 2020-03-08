const constants = require('./view/cards/constants');
const Card = require('./view/cards/card');

function flip() {
  setTimeout(() => {
    card.flip();
    flip();
  }, 5000);
}

document.addEventListener('DOMContentLoaded', (event) => {
  //the event occurred
  // flip();
  const card = new Card(document.getElementById("demo"), constants.ARROW);
  setTimeout(() => {
    card.flip();
    setTimeout(() => {
      card.flip()
      setTimeout(() => {
        card.flip()
        setTimeout(() => {
          card.flip()
        }, 1000);
      }, 1000)
    }, 1000)
  }, 1000)
})
