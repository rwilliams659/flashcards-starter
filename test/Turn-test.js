const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let card; 
  before(function() {
    card = new Card(4, 'What type of prototype method does not modify the existing array but returns a particular representation of the array?', ['mutator method', 'accessor method', 'iteration method'], 'accessor method'); 
  });

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn(); 
    expect(turn).to.be.an.instanceof(Turn); 
  });

  it('should store a guess', function() {
    const turn = new Turn('mutator method', card);
    expect(turn.guess).to.equal('mutator method');
  });

  it('should store a card', function() {
    const turn = new Turn('mutator method', card);
    expect(turn.currentCard).to.deep.equal(card);  
  });

  it('should be able to return the guess', function() {
    const turn = new Turn('mutator method', card);
    expect(turn.returnGuess()).to.equal('mutator method'); 
  });

  it('should be able to return the current card', function() {
    const turn = new Turn('mutator method', card);
    expect(turn.returnCard()).to.deep.equal(card);
  }); 

  it('should be able to evaluate the guess and return true if guess is correct', function() {
    const turn = new Turn('accessor method', card);
    expect(turn.evaluateGuess()).to.equal(true);     
  });

  it('should return false if guess is incorrect', function() {
    const turn = new Turn('mutator method', card);  
    expect(turn.evaluateGuess()).to.equal(false); 
  });

  it('should indicate if guess is correct', function() {
    const turn = new Turn('accessor method', card);
    expect(turn.giveFeedback()).to.equal('Correct!');    
  });

  it('should indicate if guess is incorrect', function() {
    const turn = new Turn('mutator method', card);
    expect(turn.giveFeedback()).to.equal('Incorrect!');    
  });
}); 