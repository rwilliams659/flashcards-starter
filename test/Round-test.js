const chai = require('chai');
const expect = chai.expect; 

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {
  let card1, card2, card3, deck; 
  before(function() {
    card1 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    card2 = new Card(7, 'Which array prototype is not an accessor method?', ['join()', 'slice()', 'splice()'], 'splice()');
    card3 = new Card(8, 'What do iterator methods take in as their first argument?', ['callback function', 'current element', 'an array'], 'callback function');
    deck = new Deck([card1, card2, card3]); 
  });

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round); 
  });

  it('should store a deck of cards', function() {
    const round = new Round(deck);
    expect(round.deck).to.equal(deck);
  });

  it('should start out with no turns recorded', function () {
    const round = new Round(deck);

    expect(round.turns).to.equal(0);
  });

  it('should be able to return the current card', function() {
    const round = new Round(deck);

    let currentCard = round.returnCurrentCard(); 

    expect(currentCard).to.deep.equal(card1);
  });

  it('should keep track of how many turns have been taken', function() {
    const round = new Round(deck);

    round.takeTurn('mutator method');
    round.takeTurn('slice()');

    expect(round.turns).to.equal(2);
  });

  it('should be able to change the current card to the next card in the deck', function() {
    const round = new Round(deck);

    round.takeTurn('mutator method');
    
    let currentCard = round.returnCurrentCard(); 

    expect(currentCard).to.deep.equal(card2);
  });

  it('should be able to evaluate a correct guess', function() {
    const round = new Round(deck);

    const turn = round.takeTurn('mutator method');
    
    expect(turn).to.equal('Correct!');
  });

  it('should be able to evaluate an incorrect guess', function () {
    const round = new Round(deck);

    const turn = round.takeTurn('accessor method');

    expect(turn).to.equal('Incorrect!');
  }); 

  it('should be able to store incorrect guesses by card id', function() {
    const round = new Round(deck);

    expect(round.incorrectGuesses).to.deep.equal([]);

    round.takeTurn('accessor method');

    expect(round.incorrectGuesses).to.deep.equal([3]);

    round.takeTurn('splice()');

    expect(round.incorrectGuesses).to.deep.equal([3]);
  }); 

  it('should be able to calculate the percentage of correct guesses', function() {
    const round = new Round(deck);

    round.takeTurn('accessor method');
    round.takeTurn('splice()');
    round.takeTurn('callback function');

    var percentCorrect = round.calculatePercentCorrect(); 

    expect(percentCorrect).to.equal(67);
  });
});