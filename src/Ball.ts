import { settings, set } from "./settings";

class Ball {
    x: number;
    y: number;
    colorId: number;
    color: string;
    constructor() {
        this.x = Math.round(Math.random() * settings.size);
        this.y = Math.round(Math.random() * settings.size);
        this.colorId = Math.round(Math.random() * 6);
        this.color = settings.colors[this.colorId];
    }
    create(): void {
        let board = settings.board;
        while (board[this.y][this.x] != 0) {
            console.log('w')
            this.x = Math.round(Math.random() * settings.size);
            this.y = Math.round(Math.random() * settings.size);
        }
        console.log(this.x, this.y)
        console.log(board)
        board[this.y][this.x] = `X${this.colorId}`;
        set('board', board);

        let ball: HTMLDivElement = document.createElement('div');
        let id: string = `${this.x},${this.y}`;
        ball.setAttribute('class', 'ball');
        ball.setAttribute('name', id);
        ball.style.background = this.color;
        document.getElementById(id).appendChild(ball);
    }
}

export default Ball;