import Ball from './Ball';
import { set, settings } from './settings';

class Game {
    startTime: Date;
    fClickField: boolean;
    board: any;
    constructor() {
        this.startTime = new Date();
    }
    create3Balls(): void {
        let ball = new Ball();
        let x: number = ball.checkEmptyField() >= 3 ? 3 : ball.checkEmptyField();
        for (let i = 0; i < x; i++) {
            ball = new Ball();
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
            item.addEventListener('click', function (e) {
                document.querySelector('.clickedBall') ? document.querySelector('.clickedBall').setAttribute('class', 'ball') : null;
                this.setAttribute('class', 'clickedBall');
                let id = this.getAttribute('name');
                set('ballId', id);
                e.stopPropagation();
                clickField();
            });
        });
    }
    clickField(): number {
        if (this.fClickField) return 0;
        console.log('a')
        this.fClickField = true;
        let searchPath = this.searchPath.bind(this);
        let moveBall = this.moveBall.bind(this);
        document.querySelectorAll('.field').forEach(item => {
            item.addEventListener('mouseover', function () {
                document.querySelector('.hoverField') ? document.querySelector('.hoverField').setAttribute('class', 'field') : null;
                this.setAttribute('class', 'field hoverField');
            });
            item.addEventListener('click', function () {
                set('fieldId', this.id);
                if (searchPath()) moveBall();
                else console.log('nothing')
            });
        });
        return 1;
    }
    searchPath(): boolean {
        this.board = JSON.parse(JSON.stringify(settings.board));
        const [xBall, yBall] = settings.ballId.split(',');
        const [xField, yField] = settings.fieldId.split(',');
        console.log('ball', xBall, yBall);
        console.log('field', xField, yField);
        console.log(settings.board);
        const neighbours = this.getNeighbours(eval(xBall), eval(yBall));
        console.info(neighbours, this.board)
        for (const item of neighbours) {
            const [x, y] = item[0].split(',');
            this.board[eval(y)][eval(x)] = 1;
        }
        console.log(settings.board)
        return true;
    }
    getNeighbours(x1: number, y1: number): Array<Array<String>> {
        let neighbours: Array<Array<String>> = [];
        for (let x: number = Math.max(0, x1 - 1); x <= Math.min(x1 + 1, settings.size - 1); x++) {
            for (let y: number = Math.max(0, y1 - 1); y <= Math.min(y1 + 1, settings.size - 1); y++) {
                if (
                    (x != x1 || y != y1) &&
                    (
                        (
                            (y == y1 - 1 || y == y1 + 1) &&
                            x == x1
                        ) ||
                        (
                            (x == x1 - 1 || x == x1 + 1) &&
                            y == y1
                        )
                    )
                ) {
                    if (settings.board[y][x] == 0)
                        neighbours.push([`${x},${y}`])
                }
            }
        }
        return neighbours;
    }
    moveBall() {

    }
}
export default Game;