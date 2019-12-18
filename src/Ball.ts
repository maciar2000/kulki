import { settings, set } from "./settings";

class Ball {
    x: number;
    y: number;
    colorId: number;
    color: string;
    constructor() {
        this.x = Math.round(Math.random() * (settings.size - 1));
        this.y = Math.round(Math.random() * (settings.size - 1));
        this.colorId = 1//Math.round(Math.random() * 6);
        this.color = settings.colors[this.colorId];
    }
    checkEmptyField(): number {
        let x: number = 0;
        settings.board.map(
            (item: any, index: number) => settings.board[index].map(
                (item: any) => item == 0 ? x++ : null
            )
        );
        return x;
    }
    create(): string[] {
        let board = JSON.parse(JSON.stringify(settings.board));
        while (board[this.y][this.x] != 0 && this.checkEmptyField() != 0) {
            console.log('w')
            this.x = Math.round(Math.random() * (settings.size - 1));
            this.y = Math.round(Math.random() * (settings.size - 1));
        }
        board[this.y][this.x] = `X${this.colorId}`;
        set('board', [...board]);

        let ball: HTMLDivElement = document.createElement('div');
        let id: string = `${this.x},${this.y}`;
        ball.setAttribute('class', 'ball');
        ball.setAttribute('name', id);
        ball.style.background = this.color;
        document.getElementById(id).appendChild(ball);
        return [`X${this.colorId}`,id];
    }
}

export default Ball;