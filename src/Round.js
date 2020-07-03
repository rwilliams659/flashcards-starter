const Turn = require('./Turn');

class Round {
  constructor(deck) {

    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.startTime = Date.now(); 
    this.endTime = null; 
  }

  returnCurrentCard = () => this.deck.cards[this.turns];

  takeTurn = guess => {
    let turn = new Turn(guess, this.returnCurrentCard()); 
    this.turns += 1;
    var result = turn.giveFeedback();
    if (result === 'Incorrect!') {
      this.incorrectGuesses.push(turn.currentCard.id);
    }
    return result; 
  }

  calculatePercentCorrect = () => {
    let deckLength = this.deck.countCards();
    var percentCorrect = Math.round((deckLength - this.incorrectGuesses.length) / deckLength * 100);
    return percentCorrect; 
  }

  getEndTime = () => this.endTime = Date.now(); 

  calculateRoundTime = () => {
    const totalSeconds = Math.floor((this.endTime - this.startTime)/1000);
    const minutes = Math.floor(totalSeconds/60);
    const seconds = totalSeconds%60; 
    return {minutes: minutes, seconds: seconds};
  }

  endRound = time => { 
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly in ${time.minutes} minutes & ${time.seconds} seconds!`);
    return process.exit();
  }
}

module.exports = Round; 