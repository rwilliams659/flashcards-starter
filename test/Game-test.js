const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game(); 
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  // it('should keep track of the current round', function() {
  //   const game = new Game();
  //   const card3 = {
  //     id: 3,
  //     question: 'What is my name?',
  //     answers: ['Sam', 'Othello', 'Rachel'],
  //     correctAnswer: 'Rachel'
  //   }
  //   const card8 = {
  //     id: 8,
  //     question: 'How old am I?',
  //     answers: [21, 36, 28],
  //     correctAnswer: 28
  //   }
  //   const flashCardData = [card3, card8]

  //   expect(game.currentRound).to.deep.equal({}); 

  //   game.start(flashCardData);

  //   expect(game.currentRound).to.equal({deck: [new Card(card3.id, card3.question, card3.answers, card3.correctAnswer), new Card(card8.id, card8.question, card8.answers, card8.correctAnswer)], turns: 0, incorrectGuesses: []});
  // });

  //   //test that flashcards are all instances of card class/round.deck[0]?

});