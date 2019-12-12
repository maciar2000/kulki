import Ball from './Ball';
import { set, settings } from './settings';

class Game {
    startTime: Date;
    constructor() {
        this.startTime = new Date();
    }
    create3Balls(): void {
        for (let i = 0; i < 3; i++) {
            let ball = new Ball();
            ball.create();
        }
    }
    startGame() {
        this.create3Balls();
        this.clickBall();
    }
    clickBall(): void {
        let clickField = this.clickField.bind(this);
        document.querySelectorAll('.ball').forEach(item => {
            item.addEventListener('click', function(e) {
                document.querySelector('.clickedBall') ? document.querySelector('.clickedBall').setAttribute('class', 'ball') : null;
                this.setAttribute('class', 'clickedBall');
                let id = this.getAttribute('name');
                set('ballId', id);
                e.stopPropagation();
                clickField();
            });
        });
    }
    clickField(): void {
        let searchPath = this.searchPath.bind(this);
        let moveBall = this.moveBall.bind(this);
        document.querySelectorAll('.field').forEach(item => {
            item.addEventListener('mouseover', function () {
                document.querySelector('.hoverField') ? document.querySelector('.hoverField').setAttribute('class', 'field') : null;
                this.setAttribute('class', 'field hoverField');
            });
            item.addEventListener('click', function () {
                set('fieldId', this.id);
                set('board2', settings.board);
                if (searchPath()) moveBall();
                else console.log('nothing')
            });
        });
    }
    searchPath(): boolean {
        let board = settings.board2;
        let [xBall, yBall] = settings.ballId.split(',');
        let [xField, yField] = settings.fieldId.split(',');
        console.log('ball',xBall, yBall);
        console.log('field', xField, yField);
        board[yField][xField] = board[yBall][xBall];
        board[yBall][xBall] = 0;
        console.log('b:'+board,'sb2:'+settings.board2,'sb:'+settings.board)
        return true;
    }
    moveBall() {
        
    }
}
export default Game;