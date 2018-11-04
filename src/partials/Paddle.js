export default class Paddle{
    constructor(width, height, isLeft){
        this.width = width;
        this.height = height;
        this.isLeft = isLeft;
        if (isLeft){
            this.posX = 0;
        }else{
            this.posX = 504;
        }
        // this.maxWidth = maxWidth;
        // this.maxHeight = maxHeight;
        // this.speed = speed;
        // this.posX = posX;
        // this.posY = posY;
    }

    render(){
        document.getElementById('gameBoard').innerHTML += `<rect x=" ${this.posX}" y ="100" width = " ${this.width}" height = "${this.height}"/>`;
    }

    move(){

    }

    eventListener(){

    }
}