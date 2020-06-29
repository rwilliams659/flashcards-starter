const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn(); 
    expect(turn).to.be.an.instanceof(Turn); 
  });

  it('should store a guess', function() {
    const card = new Card(4, 'What type of prototype method does not modify the existing array but returns a particular representation of the array?', ['mutator method', 'accessor method', 'iteration method'], 'accessor method'); 
    const turn = new Turn('mutator method', card);
    expect(turn.guess).to.equal('mutator method');
  });

  it('should store a card', function() {
    const card = new Card(4, 'What type of prototype method does not modify the existing array but returns a particular representation of the array?', ['mutator method', 'accessor method', 'iteration method'], 'accessor method');
    const turn = new Turn('mutator method', card);
    expect(turn.currentCard).to.deep.equal(card);  
  });

}); 



// Example data:
// {
//   "id": 4,
//   "question": "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
//   "answers": ["mutator method", "accessor method", "iteration method"],
//   "correctAnswer": "accessor method"
// }