import board from "./Board";
import Game from './Game';

document.getElementById('root').appendChild(board());

let game = new Game();
game.startGame();