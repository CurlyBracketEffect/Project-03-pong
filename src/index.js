import './styles/game.css';
import Game from './partials/Game'

// create a game instance
const game = new Game('game', 512, 256);


(function gameLoop() {
    // await sleep(10000);
    game.render();
    requestAnimationFrame(gameLoop);
})();

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
