class Card {
    constructor(id, question, answerChoices, correctAnswer) {
        this.id = id;
        this.question = question;
        this.answerChoices = answerChoices;
        this.correctAnswer = correctAnswer; 
    }
}

module.exports = Card; 