import { settings, set } from "./settings";

class Ball {
    x: number;
    y: number;
    colorId: number;
    constructor(color:number) {
        this.colorId = color;
        this.x = Math.round(Math.random() * (settings.size - 1));
        this.y = Math.round(Math.random() * (settings.size - 1));
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
        ball.style.background = settings.colors[this.colorId];
        document.getElementById(id).appendChild(ball);
        return [`X${this.colorId}`,id];
    }
}

export default Ball;