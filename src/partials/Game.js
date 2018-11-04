// import SVG_NS from '../settings.js'
import Board from './Board.js'
import Paddle from './Paddle.js'
import Ball from './Ball.js'
import Score from './Score.js'

export default class Game {

	constructor(element, width, height) {
		this.element = document.getElementById(element);
		this.width = width;
		this.height = height;
		this.board = new Board (width, height);
		this.paddleOne = new Paddle (8, 56, true);
		this.paddleTwo = new Paddle (8, 56, false);	
		this.Ball = new Ball(8);
		this.Score = new Score(70, 140, 0,0);
	}

	render() {
		document.getElementById('game').innerHTML = '';
		this.board.render();
		this.paddleOne.render();
		this.paddleTwo.render();
		this.Ball.render();
		this.Score.render();
		}

}