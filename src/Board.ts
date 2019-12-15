import { set, settings } from "./settings";

let board = (): HTMLDivElement => {
    let mainDiv: HTMLDivElement = document.createElement('div');
    let x: Number = settings.size;
    let board: Array<Array<number>> = [];
    for (let i = 0; i < x; i++) {
        let row: any = [];
        for (let j = 0; j < x; j++) {
            let div: HTMLDivElement = document.createElement('div');
            div.setAttribute('id', j + ',' + i);
            div.setAttribute('class', 'field');
            div.style.top = (i * 50) + 'px';
            div.style.left = (j * 50) + 'px';
            mainDiv.appendChild(div);
            row.push(0);
        }
        board.push(row);
    }
    set('board', [...board]);
    return mainDiv;
}
export default board;