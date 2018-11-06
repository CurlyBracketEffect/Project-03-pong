import Board from './Board.js'
import Paddle from './Paddle.js'
import Ball from './Ball.js'
import Score from './Score.js'
import { KEYS } from '../settings.js'

export default class Game {

	constructor(element, width, height) {
		this.element = document.getElementById(element);
		this.width = width;
		this.height = height;
		this.board = new Board(width, height);
		this.paddleOne = new Paddle(this.board, 8, 56, true, KEYS.a, KEYS.z);
		this.paddleTwo = new Paddle(this.board, 8, 56, false, KEYS.up, KEYS.down);
		this.ball = new Ball(this.board, 8, this.paddleOne, this.paddleTwo, this.score);
		this.score = new Score(this.ball, 70, 140);
		this.pause = false;
		let pauseDiv = document.getElementById('paused');

		document.addEventListener('keydown', event => {
			console.log(event.key);
			if(event.key === " "){
				if(this.pause){
					this.pause = false;
					pauseDiv.style.display = "none";
				}else{
					this.pause = true;
					pauseDiv.style.display = "flex";
				}
			}
		});
	}

	render() {
	
		if (!this.pause) {
			document.getElementById('game').innerHTML = '';
			document.getElementById('scoreboard').innerHTML = '';
			this.board.render();
			this.paddleOne.render();
			this.paddleTwo.render();
			this.ball.render();
			this.score.render();
			// this.score.render(this.playerOneScore, this.playerTwoScore);
			// this.playerOneScore = 0;
			// this.playerTwoScore = 0;

		}
	}

}