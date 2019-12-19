import Ball from './Ball';
import { set, settings } from './settings';

class Game {
    startTime: Date;
    fClickField: boolean;
    board: any;
    path: String[];
    points: number;
    nextBalls: any;
    colors: number[];
    constructor() {
        this.startTime = new Date();
        this.points = 0;
        this.colors = [];
    }
    create3Balls(): string[][] {
        let ball = new Ball(0);
        let x: number = ball.checkEmptyField() >= 3 ? 3 : ball.checkEmptyField();
        if (x<3 || ball.checkEmptyField()<4) {
            if (confirm("Game over! Restart the game?")) location.reload();
        }
        let balls: string[][] = [];
        for (let i = 0; i < x; i++) {
            ball = new Ball(this.colors[i]);
            balls.push(ball.create());
        }
        this.showNextBalls();
        return balls;
    }
    showNextBalls() {
        this.colors = [];
        for (let i = 0; i < 3; i++){
            this.colors.push(Math.round(Math.random() * 6));
        }
        for (let i = 0; i < 3; i++) {
            let ball: HTMLDivElement = document.createElement('div');
            ball.style.background = settings.colors[this.colors[i]];
            ball.setAttribute('class', 'ball');
            document.getElementById('nextBalls').children[i].innerHTML = '';
            document.getElementById('nextBalls').children[i].appendChild(ball);
        }
    }
    startGame() {
        this.showNextBalls();
        this.create3Balls();
        this.clickBall();
        this.showPoints();
        let m = 0;
        setInterval(() => {
            let date: Date = new Date();
            let time = Math.round((date.getTime() - this.startTime.getTime()) / 1000);
            if (time % 60 == 0) m++;
            document.getElementById('time').children[0].innerHTML = `${m}:${time-(m*60)}`;
        },1000)
    }
    showPoints() {
        document.getElementById('points').children[0].innerHTML = this.points + '';
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
        if ((path[0].length == 0 && this.board[eval(yField)][eval(xField)] != 0) || path[0].length > 0) {
            retVal = true;
            this.path = path[0]
        }
        path[0].unshift(`${xField},${yField}`);
        path[0].push(`${xBall},${yBall}`);
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
    moveBall(): void {
        this.path.reverse();
        for (let id in this.path) {
            if (eval(id) + 1 == this.path.length) break;
            let child = document.getElementById(<string>this.path[eval(id)]).children[0];
            document.getElementById(<string>this.path[eval(id) + 1]).append(child);
        }
        let i = 0;
        for (let item of this.path) {
            document.getElementById(<string>item).style.background = "rgba(100,100,100,0.5)";
            i++;
            setTimeout(() => {
                document.getElementById(<string>item).style.background = "";
            }, 100 * i)
        }
        document.querySelector('.clickedBall').setAttribute('class', 'ball')
        set('ballId', '');
        set('fieldId', '');
        let [x, y] = this.path[0].split(',');
        let [x2, y2] = this.path[this.path.length - 1].split(',');
        this.board = JSON.parse(JSON.stringify(settings.board));
        this.board[eval(y2)][eval(x2)] = this.board[eval(y)][eval(x)];
        this.board[eval(y)][eval(x)] = 0;
        set('board', this.board);
        document.getElementsByName(`${x},${y}`)[0].setAttribute('name', `${x2},${y2}`);
        let destroy = [
            this.find5Balls(this.board[eval(y2)][eval(x2)], eval(y2)),
            this.find5Balls(this.board[eval(y2)][eval(x2)], eval(x2), 'column'),
            this.find5Balls(this.board[eval(y2)][eval(x2)], eval(x2), 'crossUp', eval(y2)),
            this.find5Balls(this.board[eval(y2)][eval(x2)], eval(x2), 'crossDown', eval(y2))
        ];
        if (destroy[0] || destroy[1] || destroy[2] || destroy[3]) console.log('destroy');
        else {
            let balls = this.create3Balls();
            for (let ball of balls) {
                let [color, id] = ball;
                this.find5Balls(color, eval(id.split(',')[1]));
                this.find5Balls(color, eval(id.split(',')[0]), 'column');
                this.find5Balls(this.board[eval(y2)][eval(x2)], eval(x2), 'crossUp', eval(y2));
                this.find5Balls(this.board[eval(y2)][eval(x2)], eval(x2), 'crossDown', eval(y2));
            }
            this.clickBall();
        }
    }
    find5Balls(color: string, number: number, type: string = 'row', number2?: number): boolean {
        if (type == 'row') {
            let x: number = 0;
            for (let item of settings.board[number]) {
                if (item == color) x++;
            }
            if (x >= 5) {
                let distance: number = settings.board[number].lastIndexOf(color) - settings.board[number].indexOf(color)
                if (distance == 4) {
                    this.destroyBalls(`${settings.board[number].indexOf(color)},${number}`, `${settings.board[number].lastIndexOf(color)},${number}`, 'row');
                    return true;
                } else {
                    let xBall: number = settings.board[number].indexOf(color);
                    let count = 0;
                    let last: string;
                    let lastX: number;
                    for (let i = 0; i < x; i++) {
                        if (settings.board[number][xBall + i] == color) {
                            count++;
                            last = `${xBall + i},${number}`;
                            lastX = xBall + i;
                        }
                        else if (x >= count + 5) {
                            count = 0;
                            x++;
                        } else break;
                    }
                    if (count >= 5) {
                        let first: string = `${lastX - count + 1},${number}`;
                        this.destroyBalls(first, last, 'row');
                        return true;
                    } else return false;
                }
            } else return false;
        } else if (type == 'column') {
            let colors = [];
            for (let i = 0; i < settings.size; i++) {
                colors.push(settings.board[i][number]);
            }
            let x: number = 0;
            for (let item of colors) {
                if (item == color) x++;
            }
            if (x >= 5) {
                let distance: number = colors.lastIndexOf(color) - colors.indexOf(color)
                if (distance == 4) {
                    this.destroyBalls(`${number},${colors.indexOf(color)}`, `${number},${colors.lastIndexOf(color)}`, 'column');
                    return true;
                } else {
                    let yBall: number = colors.indexOf(color);
                    let count = 0;
                    let last: string;
                    let lastY: number;
                    for (let i = 0; i < x; i++) {
                        if (colors[yBall + i] == color) {
                            count++;
                            last = `${number},${yBall + i}`;
                            lastY = yBall + i;
                        }
                        else if (x >= count + 5) {
                            count = 0;
                            x++;
                        } else break;
                    }
                    if (count >= 5) {
                        let first: string = `${number},${lastY - count + 1}`;
                        this.destroyBalls(first, last, 'column');
                        return true;
                    } else return false;
                }
            } else return false;
        } else if (type == 'crossUp') {
            //* number=x, number2=y
            if (number + number2 >= 4 && number + number2 <= 12) {
                let colors: string[] = [];
                let y: number;
                let ids: string[] = [];
                if (number2 + number <= 8) {
                    y = number2 + number;
                    for (let i = 0; i <= y; i++) {
                        colors.push(settings.board[y - i][i]);
                        ids.push(`${i},${y - i}`);
                    }
                } else {
                    y = number + number2 - 8;
                    for (let i = 0; i < 9 - y; i++) {
                        colors.push(settings.board[y + i][8 - i]);
                        ids.push(`${8 - i},${y + i}`);
                    }
                }
                let x = 0;
                for (let item of colors) {
                    if (item == color) x++;
                }
                if (x >= 5) {
                    let distance: number = colors.lastIndexOf(color) - colors.indexOf(color)
                    if (distance == 4) {
                        this.destroyBalls('0', '0', 'crossUp', ids, colors, color);
                        return true;
                    } else {
                        let yBall: number = colors.indexOf(color);
                        let count = 0;
                        let ids2: string[] = [ids[yBall]];
                        let colors2: string[] = [colors[yBall]]
                        for (let i = 0; i < x; i++) {
                            if (colors[yBall + i] == color) {
                                count++;
                                ids2.push(ids[yBall + i])
                                colors2.push(colors[yBall + i])
                            }
                            else if (x >= count + 5) {
                                count = 0;
                                x++;
                                ids2 = [];
                                colors2 = [];
                            } else break;
                        }
                        if (count >= 5) {
                            this.destroyBalls('0', '0', 'crossUp', ids2, colors2, color);
                            return true;
                        } else return false;
                    }
                } else return false;
            } else return false;
        } else {
            //* number=x, number2=y
            if (number2 - number <= 4 && number2 - number >= -4) {
                let colors: string[] = [];
                let y: number;
                let ids: string[] = [];
                if (number2 - number >= 0) {
                    y = number2 - number;
                    for (let i = 0; i < 9 - y; i++) {
                        colors.push(settings.board[y + i][i]);
                        ids.push(`${i},${y + i}`)
                    }
                } else {
                    y = 8 + (number2 - number);
                    for (let i = 0; i <= y; i++) {
                        colors.push(settings.board[y - i][8 - i]);
                        ids.push(`${8 - i},${y - i}`);
                    }
                }
                let x = 0;
                for (let item of colors) {
                    if (item == color) x++;
                }
                if (x >= 5) {
                    let distance: number = colors.lastIndexOf(color) - colors.indexOf(color)
                    if (distance == 4) {
                        this.destroyBalls('0', '0', 'crossDown', ids, colors, color);
                        return true;
                    } else {
                        let yBall: number = colors.indexOf(color);
                        let count = 0;
                        let ids2: string[] = [ids[yBall]];
                        let colors2: string[] = [colors[yBall]]
                        for (let i = 0; i < x; i++) {
                            if (colors[yBall + i] == color) {
                                count++;
                                ids2.push(ids[yBall + i])
                                colors2.push(colors[yBall + i])
                            }
                            else if (x >= count + 5) {
                                count = 0;
                                x++;
                                ids2 = [];
                                colors2 = [];
                            } else break;
                        }
                        if (count >= 5) {
                            this.destroyBalls('0', '0', 'crossDown', ids2, colors2, color);
                            return true;
                        } else return false;
                    }
                } else return false;
            } else return false;
        }
    }
    destroyBalls(first: string, last: string, type: string, crossId?: string[], crossColors?: string[], color?: string) {
        let board = JSON.parse(JSON.stringify(settings.board));
        if (type === 'row') {
            let y = eval(first.split(',')[1]);
            setTimeout(() => {
                let x: number = eval(first.split(',')[0]);
                let newId: string;
                for (let i: number = 0; ; i++) {
                    newId = `${x + i},${y}`;
                    document.getElementById(newId).innerHTML = '';
                    board[y][x + i] = 0;
                    this.points++;
                    if (newId == last) break;
                }
            }, 1000);
        } else if (type === 'column') {
            let x = eval(first.split(',')[0]);
            let y: number = eval(first.split(',')[1]);
            let newId: string;
            setTimeout(() => {
                for (let i: number = 0; ; i++) {
                    newId = `${x},${y + i}`;
                    document.getElementById(newId).innerHTML = '';
                    board[y + i][x] = 0;
                    this.points++;
                    if (newId == last) break;
                }
            }, 1000);
        } else if (type == 'crossUp') {
            setTimeout(() => {
                for (let i = 0; i < crossId.length; i++) {
                    if (crossColors[i] == color) {
                        let [x, y] = crossId[i].split(',');
                        document.getElementById(crossId[i]).innerHTML = '';
                        board[eval(y)][eval(x)] = 0;
                        this.points++;
                    }
                }
            }, 1000);
        } else {
            setTimeout(() => {
                for (let i = 0; i < crossId.length; i++) {
                    if (crossColors[i] == color) {
                        let [x, y] = crossId[i].split(',');
                        document.getElementById(crossId[i]).innerHTML = '';
                        board[eval(y)][eval(x)] = 0;
                        this.points++;
                    }
                }
            }, 1000);
        }
        set('board', board);
        setTimeout(()=>this.showPoints(), 1500);
    }
}
export default Game;