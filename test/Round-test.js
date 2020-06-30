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
    let card1 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    let card2 = new Card(7, 'Which array prototype is not an accessor method?', ['join()', 'slice()', 'splice()'], 'splice()');
    let deck = new Deck([card1, card2]); 
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
    expect(round.deck).to.equal(deck)
  });

  //the below block may need editing
  it.skip('should instantiate a new turn', function() {
    const round = new Round(deck);
    
    round.takeTurn('mutator method');

    expect(turn).to.be.an.instanceof(Turn); 
  });

  it.skip('should keep track of how many turns have been taken', function() {
    const round = new Round(deck);

    round.takeTurn('mutator method');
    round.takeTurn('slice()');

    expect(round.turns).to.equal(2)
  });

})