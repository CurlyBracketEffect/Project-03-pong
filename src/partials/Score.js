export default class Score{
    constructor(width, height, playerOneScore, playerTwoScore){
        this.width = width;
        this.height = height;
        this.playerOneScore = playerOneScore;
        this.playerTwoScore = playerTwoScore;
    }

    render(){
        document.getElementById('gameBoard').innerHTML += '<text x="50%" y="0" fill="grey">10</text>'
        // document.getElementById('gameBoard').innerHTML += `<rect id="score" x = "50%" y="0" width=" ${this.width}" height="${this.height}"/>`;
        // document.getElementById('score').innerHTML += `<p>${this.playerOneScore}</p>`;
        // document.getElementById('score').innerHTML += `<p>${this.playerTwoScore}</p>`;
    }
}