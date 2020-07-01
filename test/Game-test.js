const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game(); 
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });


  //This test needs to be done after all tests for start method, since start method instantiates a new Round 
  it.skip('should keep track of the current round', function() {
    const game = new Game();

    game.start();
    //start will instantiate a round; it should also assign that object to a currentRound property of Game 

    expect(game.currentRound).to.deep.equal({})
  });

});