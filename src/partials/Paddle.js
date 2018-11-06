import {speed} from '../settings.js'

export default class Paddle {
    constructor(board, width, height, isLeft, up, down) {
        this.width = width;
        this.height = height;
        this.isLeft = isLeft;
        if (isLeft) {
            this.posX = 0;
        } else {
            this.posX = board.width - width;
        }
        this.board = board;

        // this.speed = 10;
        this.posY = board.height / 2 - height / 2;
        //make event listener listen for multiple key presses at a time...pass in array?
        document.addEventListener('keydown', event => {
            // console.log(event);
            switch (event.key) {
                case up:
                    // this.posY -= this.speed
                    this.posY -= speed

                    this.posY = Math.max(0, this.posY)
                    break;
                case down:
                    // this.posY += this.speed
                    this.posY += speed
                    this.posY = Math.min(board.height - this.height, this.posY)
                    break;
            }
        });
    }

    render() {
        document.getElementById('gameBoard').innerHTML += `<rect x=" ${this.posX}" y =" ${this.posY} "width = " ${this.width}" height = "${this.height}"/>`;
    }

    coordinates() {
        let leftX = this.posX;
        let rightX = this.posX + this.width;
        let topY = this.posY;
        let bottomY = this.posY + this.height;
        return [leftX, rightX, topY, bottomY];
      }

    reset(){
        this.posY = this.board.height / 2 - this.height / 2;
        if (this.isLeft) {
            this.posX = 0;
        } else {
            this.posX = this.board.width - this.width;
        }

    }
}