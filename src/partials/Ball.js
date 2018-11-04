export default class Ball{
    constructor(radius){
        this.radius= radius;
        this.posX = 256;
        this.posY = 128;
    }

    render(){
        document.getElementById('gameBoard').innerHTML += `<circle cx=' ${this.posX}'cy='${this.posY} 'r='${this.radius}'/>`;
    }

    move(){

    }

    collision(){

    }

    goal(){

    }
}