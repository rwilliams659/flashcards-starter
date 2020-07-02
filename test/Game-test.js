const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game(); 
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should have no current round when created', function() {
    const game = new Game();
    expect(game.currentRound).to.equal(null); 
  });

  it('should keep track of the current round', function() {
    const game = new Game();
    const card3 = {
      id: 3,
      question: 'What is my name?',
      answers: ['Sam', 'Othello', 'Rachel'],
      correctAnswer: 'Rachel'
    }
    const card8 = {
      id: 8,
      question: 'How old am I?',
      answers: [21, 36, 28],
      correctAnswer: 28
    }
    const flashCardData = [card3, card8];

    game.start(flashCardData);

    expect(game.currentRound.deck.cards[0].id).to.equal(3); 
  });
});