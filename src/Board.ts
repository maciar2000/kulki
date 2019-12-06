class Board {
    x: number;
    constructor(x: number) {
        this.x = x;
    }
    create(): HTMLDivElement {
        var mainDiv: HTMLDivElement = document.createElement('div');
        for (var i = 0; i < this.x; i++) {
            for (var j = 0; j < this.x; j++) {
                var div: HTMLDivElement = document.createElement('div');
                div.setAttribute('id', i + ',' + j);
                div.setAttribute('class', 'field');
                div.style.top = (i * 50) + 'px';
                div.style.left = (j * 50) + 'px';
                mainDiv.appendChild(div);
            }
        }
        return mainDiv;
    }
}
export default Board;