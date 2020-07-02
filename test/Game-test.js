const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', function() {
  let game;
  before(function() {
    game = new Game(); 
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should have no current round when created', function() {
    expect(game.currentRound).to.equal(null); 
  });

  it('should keep track of the current round', function() {
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