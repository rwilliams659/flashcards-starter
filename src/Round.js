const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard()); 
    this.turns += 1;
    var result = turn.giveFeedback();
    if (result === 'Incorrect!') {
      this.incorrectGuesses.push(turn.currentCard.id);
    }
    return result; 
  }

  calculatePercentCorrect() {
    let deckLength = this.deck.countCards();
    var percentCorrect = Math.round((deckLength - this.incorrectGuesses.length) / deckLength * 100);
    return percentCorrect; 
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return process.exit();
  }
}

module.exports = Round; 