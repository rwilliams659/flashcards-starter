const http = require('http');
const Game = require('./src/Game');
const data = require('./src/data');
let app = http.createServer();
const game = new Game(); 
const prototypeQuestions = data.prototypeData;

// Start the server on port 3000
app.listen(3000, '127.0.0.1');  
console.log('Node server running on port 3000'); 
game.start(prototypeQuestions); 