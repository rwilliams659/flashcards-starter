const Turn = require('./Turn');
const Deck = require('./Deck');
const Card = require('./Card')

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard()); 
    this.turns += 1;
    return turn.giveFeedback();
  }
}

module.exports = Round; 