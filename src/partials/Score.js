export default class Score {
    constructor(ball, width, height) {
        this.width = width;
        this.height = height;
        this.playerOneScore = 0;
        this.playerTwoScore = 0;
        this.ball = ball;
        this.ping4 = new Audio("public/sounds/pong-04.wav");

    }

    ballScoreCollision() {
        // detect goals
        if (this.ball.posX + this.ball.radius > this.ball.board.width) {
            this.playerOneScore++;
            if (this.playerOneScore == 5) {
                this.ping4.play();
                alert("Player One Is The Winner!!!");
                this.newGame();
            }
            this.ball.direction = -this.ball.direction;
            this.ball.reset();
        }

        if (this.ball.posX - this.ball.radius < 0) {
            this.playerTwoScore++;
            if (this.playerTwoScore == 5) {
                this.ping4.play();
                alert("Player Two Is The Winner!!!");
                this.newGame();
            }
            this.ball.direction = -this.ball.direction;
            this.ball.reset();
        }
    }

    newGame() {
        this.playerOneScore = 0;
        this.playerTwoScore = 0;
        this.ball.paddleOne.reset();
        this.ball.paddleTwo.reset();
    }

    render(addOne, addTwo) {
        this.ballScoreCollision();
        // document.getElementById('gameBoard').innerHTML += `<text x='0' y='0' fill='red'>10</text>`;
        document.getElementById('scoreboard').innerHTML += `<p>Player One Score: ${this.playerOneScore}</p> <p>Player Two Score: ${this.playerTwoScore}</p>`;

        // document.getElementById('gameBoard').innerHTML += `<rect id="score" x = "50%" y="0" width=" ${this.width}" height="${this.height}"/>`;
        // document.getElementById('score').innerHTML += `<p>${this.playerOneScore}</p>`;
        // document.getElementById('score').innerHTML += `<p>${this.playerTwoScore}</p>`;
    }
}