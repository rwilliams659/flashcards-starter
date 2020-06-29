class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.currentCard = card; 
  }

  returnGuess() {
    return this.guess; 
  }

  returnCard() {
    return this.currentCard; 
  }

  evaluateGuess() {
    if (this.guess === this.currentCard.correctAnswer) {
      return true;
    }
    return false;
  }

  giveFeedback() {
    if (this.guess === this.currentCard.correctAnswer) {
      return 'correct!';
    }
    return 'incorrect!';
}

module.exports = Turn; 