class Board {
    x: number;
    colors: any;
    constructor(x: number) {
        this.x = x;
        this.colors = [
            "red",
            "blue",
            "green",
            "black",
            "pink",
            "yellow",
            "orange"
        ]
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
    balls(): void {
        for (var i = 0; i < 3; i++) {
            var x, y: number;
            x = Math.round(Math.random() * 8);
            y = Math.round(Math.random() * 8);
            var id = x + ',' + y;
            var color = this.colors[Math.round(Math.random() * 6)];
            var div: HTMLDivElement = document.createElement('div');
            div.setAttribute('class', 'ball');
            div.style.background = color;
            document.getElementById(id).appendChild(div);
            console.log(color);
        }
    }
}
export default Board;