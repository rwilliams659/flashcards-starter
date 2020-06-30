const chai = require('chai');
const expect = chai.expect; 

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Round', function() {

  it.skip('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it.skip('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round); 
  });

  it.skip('should store a deck of cards', function() {
    const card1 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const card2 = new Card(7, 'Which array prototype is not an accessor method?', ['join()', 'slice()', 'splice()'], 'splice()');
    const deck = new Deck([card1, card2]); 
    const round = new Round(deck);
    expect(round.deck).to.equal(deck)
  });

  //multiple tests needed for takeTurn method; first: 
    //takeTurn method must take in a guess 
    //it should create new instance of Turn & pass in guess & current card 

})