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
        let x: number = ball.checkEmptyField() >= 3 ? 21 : ball.checkEmptyField();
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
                set('fieldId', this.id);
                //searchPath()
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
        // console.log('ball', xBall, yBall);
        // console.log('field', xField, yField);
        // console.log(settings.board);
        let neighboursBall = this.getNeighbours(eval(xBall), eval(yBall));
        let currentField = `${xBall},${yBall}`;
        // console.info(neighboursBall, this.board)
        let i = 1;
        let j = 1;
        let key = 0;
        let neighboursBase = [...neighboursBall];
        for (const item of neighboursBall) {
            const [x, y] = item.split(',');
            this.board[eval(y)][eval(x)] = j;
            currentField = `${x},${y}`;
            if (currentField == `${xField},${yField}`) break;
            const neighbours = this.getNeighbours(eval(x), eval(y));
            document.getElementById(`${x},${y}`).innerHTML += `${j}`;

            for (const item2 of neighbours) {
                if (neighboursBall.indexOf(item2) == -1)
                    neighboursBall.push(item2);
                if (currentField == `${xField},${yField}`) break;
            }
            if (neighboursBase.length / i == 1) {
                key += i;
                // console.log(j, i, neighboursBase, neighboursBase.slice(key));
                neighboursBase = neighboursBall.slice(key);
                j++;
                i = 1;
            } else i++;
        }
        // console.log(neighboursBase, neighboursBall)
        let path: String[][] = [[], []];
        console.log(j)
        console.table(this.board)
        let x: number = xField;
        let y: number = yField;
        let val: number = j;
        for (let i = 0; ; i++){
            let neighbours = this.getNeighbours(x, y, true);
            console.log('s',i,neighbours)
            let index = 0;
            for (let item of neighbours) {
                console.log(item)
                let x2: number = eval(item.split(',')[0]);
                let y2: number = eval(item.split(',')[1]);
                if (this.board[y2][x2] == val - 1) {
                    path[index][i] = item;
                    index++;
                    x = x2;
                    y = y2;
                }
            }
            if (val == 0) break;
            val -= 1;
        }
        if (path[1].length > 0) {
            for (let id in path[1]) {
                path[0][id] = path[1][id];
            }
        }
        path[0].unshift(`${xField},${yField}`);
        console.log(path)
        for (let item of path[0]) {
            setTimeout(() => {
                
                document.getElementById(<string>item).setAttribute('class', 'field path');
            }, 100);
        }
        return true;
    }
    getNeighbours(x1: number, y1: number,filled?:boolean): Array<String> {
        let neighbours: Array<String> = [];
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
                    if ((!filled && this.board[y][x] == 0) || filled)
                        neighbours.push(`${x},${y}`)
                }
            }
        }
        return neighbours;
    }
    moveBall() {

    }
}
export default Game;