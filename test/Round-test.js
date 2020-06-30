const chai = require('chai');
const expect = chai.expect; 

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Round', function() {
  let card1;
  let card2;
  let deck; 
  beforeEach(function() {
    card1 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    card2 = new Card(7, 'Which array prototype is not an accessor method?', ['join()', 'slice()', 'splice()'], 'splice()');
    deck = new Deck([card1, card2]); 
  });

  it.skip('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it.skip('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round); 
  });

  it.skip('should store a deck of cards', function() {
    const round = new Round(deck);
    expect(round.deck).to.equal(deck);
  });

  it.skip('should be able to return the current card', function() {
    const round = new Round(deck);

    let currentCard = round.returnCurrentCard; 

    expect(currentCard).to.deep.equal(card1);
  })

  //the below block may need editing
  it.skip('should be able to instantiate a new turn', function() {
    const round = new Round(deck);
    
    round.takeTurn('mutator method');

    expect(turn).to.be.an.instanceof(Turn); 
  });

  it.skip('should keep track of how many turns have been taken', function() {
    const round = new Round(deck);

    round.takeTurn('mutator method');
    round.takeTurn('slice()');

    expect(round.turns).to.equal(2);
  });

  it.skip('should be able to change the current card to the next card in the deck', function() {
    const round = new Round(deck);

    round.takeTurn('mutator method');

    expect(turn.currentCard).to.deep.equal(card2);
  });

  it.skip('should be able to store incorrect guesses by card id', function() {
    const round = new Round(deck);

    expect(turn.incorrectGuesses).to.be.empty;

    round.takeTurn('accessor method');

    expect(turn.incorrectGuesses).to.deep.equal([3]);

    round.takeTurn('splice()');

    expect(turn.incorrectGuesses).to.deep.equal([3]);
  }); 

  it.skip('should be able to calculate the percentage of correct guesses', function() {
    const round = new Round(deck);

    round.takeTurn('accessor method');
    round.takeTurn('splice()');

    var percentCorrect = round.calculatePercentCorrect(); 

    expect(percentCorrect).to.equal(50);
  });

  it.skip('should end a round when all the cards in the deck have been played', function() {
    const round = new Round(deck);

    round.takeTurn('accessor method');
    round.takeTurn('splice()');
    round.calculatePercentCorrect(); 

    var roundOver = round.endRound; 

    expect(roundOver).to.equal('** Round over! ** You answered 50% of the questions correctly!')
  });
});