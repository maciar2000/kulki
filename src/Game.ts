import Ball from './Ball';
import { set, settings } from './settings';

class Game {
    startTime: Date;
    fClickField: boolean;
    board: any;
    path: String[];
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
        this.fClickField = true;
        let searchPath = this.searchPath.bind(this);
        let moveBall = this.moveBall.bind(this);
        document.querySelectorAll('.field').forEach(item => {
            item.addEventListener('mouseover', function () {
                try {
                    if (this.children.length == 0) {
                        document.querySelector('.hoverField') ? document.querySelector('.hoverField').setAttribute('class', 'field') : null;
                        this.setAttribute('class', 'field hoverField');
                        set('fieldId', this.id);
                        searchPath()
                    }
                } catch{
                    item.setAttribute('class', 'field')
                }
            });
            item.addEventListener('mouseout', function () {
                document.querySelectorAll('.path').forEach((item) => {
                    item.setAttribute('class', 'field')
                })
            })
            item.addEventListener('click', function () {
                if (this.children.length == 0) {
                    set('fieldId', this.id);
                    if (searchPath()) moveBall();
                    else console.log('nothing')
                }
            });
        });
        return 1;
    }
    searchPath(): boolean {
        this.board = JSON.parse(JSON.stringify(settings.board));
        const [xBall, yBall] = settings.ballId.split(',');
        const [xField, yField] = settings.fieldId.split(',');
        let neighboursBall = this.getNeighbours(eval(xBall), eval(yBall));
        let currentField = `${xBall},${yBall}`;
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
            for (const item2 of neighbours) {
                if (neighboursBall.indexOf(item2) == -1)
                    neighboursBall.push(item2);
                if (currentField == `${xField},${yField}`) break;
            }
            if (neighboursBase.length / i == 1) {
                key += i;
                neighboursBase = neighboursBall.slice(key);
                j++;
                i = 1;
            } else i++;
        }
        let path: String[][] = [[], []];
        let x: number = eval(xField);
        let y: number = eval(yField);
        let val: number = j;
        for (let i = 0; ; i++) {
            let neighbours = this.getNeighbours(x, y, true);
            let index = 0;
            if (val == 1) break;
            for (let item of neighbours) {
                let x2: number = eval(item.split(',')[0]);
                let y2: number = eval(item.split(',')[1]);
                if (this.board[y2][x2] == val - 1) {
                    path[index][i] = item;
                    index++;
                    x = x2;
                    y = y2;
                } else continue;
            }
            val -= 1;
        }
        if (path[1].length > 0) {
            for (let id in path[1]) {
                path[0][id] = path[1][id];
            }
        }
        let retVal: boolean = false;
        console.log(path)
        if ((path[0].length == 0 && this.board[eval(yField)][eval(xField)] != 0) || path[0].length > 0) {
            retVal = true;
            this.path = path[0]
        }
        path[0].unshift(`${xField},${yField}`);
        path[0].push(`${xBall},${yBall}`)
        for (let item of path[0]) {
            document.getElementById(<string>item).setAttribute('class', 'field path');
        }
        return retVal;
    }
    getNeighbours(x1: number, y1: number, filled?: boolean): Array<String> {
        let neighbours: Array<String> = [];
        for (let x: number = Math.max(0, x1 - 1); x <= Math.min(x1 + 1, settings.size - 1); x++) {
            for (let y: number = Math.max(0, y1 - 1); y <= Math.min(y1 + 1, settings.size - 1); y++) {
                if ((x != x1 || y != y1) && (((y == y1 - 1 || y == y1 + 1) && x == x1) || ((x == x1 - 1 || x == x1 + 1) && y == y1))) {
                    if ((!filled && this.board[y][x] == 0) || filled)
                        neighbours.push(`${x},${y}`)
                }
            }
        }
        return neighbours;
    }
    moveBall() {
        this.path.reverse();
        console.log(this.path)
        for (let id in this.path) {
            if (eval(id) + 1 == this.path.length) break;
            console.log(eval(id) + 1)
            let child = document.getElementById(<string>this.path[eval(id)]).children[0];
            document.getElementById(<string>this.path[eval(id) + 1]).append(child);
        }
        document.querySelector('.clickedBall').setAttribute('class', 'ball')
        set('ballId', '');
        set('fieldId', '');
        let [x, y] = this.path[0].split(',');
        let [x2, y2] = this.path[this.path.length - 1].split(',');
        console.table(settings.board);
        this.board = JSON.parse(JSON.stringify(settings.board));
        this.board[eval(y2)][eval(x2)] = this.board[eval(y)][eval(x)];
        this.board[eval(y)][eval(x)] = 0;
        set('board', this.board);
        console.table(settings.board);
        document.getElementsByName(`${x},${y}`)[0].setAttribute('name', `${x2},${y2}`);
    }
}
export default Game;