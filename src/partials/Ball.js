export default class Ball {
    constructor(board, radius, paddleOne, paddleTwo) {
        this.radius = radius;
        this.board = board;
        this.direction = 1;
        this.reset();
        this.paddleOne = paddleOne;
        this.paddleTwo = paddleTwo;
    }

    render() {
        this.posX += this.vx;
        this.posY += this.vy;
        //detect collision with left and right walls and reverse diretion
        // if (this.posX + this.radius > this.board.width || this.posX - this.radius <= 0) {
        //     this.vx = -this.vx;
        // }
        //detect collision with top and bottom walls and reverse direction
        if (this.posY + this.radius > this.board.height || this.posY - this.radius <= 0) {
            this.vy = -this.vy;
        }

        // get array with paddle coordinates in format: [leftX, rightX, topY, bottomY]
        let coordOne = this.paddleOne.coordinates();
        let coordTwo = this.paddleTwo.coordinates();

        if (this.posX - this.radius < coordOne[1] || this.posX + this.radius > coordTwo[0]) {
            if (this.posY >= coordOne[2] && this.posY <= coordOne[3] || this.posY >= coordTwo[2] && this.posY <= coordTwo[3]) {
                this.vx = -this.vx;
            }
        }
        document.getElementById('gameBoard').innerHTML += `<circle cx=' ${this.posX}'cy='${this.posY} 'r='${this.radius}'/>`;
    }

    reset() {
        //reset ball to center of board and randomize new vectors at random
        this.posX = this.board.width / 2;
        this.posY = this.board.height / 2;
        this.vy = Math.floor(Math.random() * 10 - 5);
        this.vx = this.direction * (6 - Math.abs(this.vy));
    }

    collision() {

    }

    goal() {
        this.reset();
    }
}