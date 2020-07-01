const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');

class Game {
  constructor() {
    this.currentRound = {}
  }

  start(cardData) {
    let flashcards = []; 
    cardData.forEach(card => flashcards.push(new Card(card.id, card.question, card.answers, card.correctAnswer)));
    const deck = new Deck(flashcards); 
    const round = new Round(deck); 
    this.currentRound = round; 
    this.printMessage(deck, round);
    this.printQuestion(round); 
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;