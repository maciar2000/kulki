class Board {
    x: number;
    colors: any;
    clickedBall: boolean;
    constructor(x: number) {
        this.x = x;
        this.colors = [
            "red",
            "blue",
            "green",
            "black",
            "pink",
            "gray",
            "orange"
        ];
        this.clickedBall = false;
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
            var id: string = x + ',' + y;
            var color = this.colors[Math.round(Math.random() * 6)];
            var div: HTMLDivElement = document.createElement('div');
            div.setAttribute('class', 'ball');
            div.setAttribute('name', id);
            div.style.background = color;
            document.getElementById(id).appendChild(div);
            console.log(color);
        }
        this.clickBall();
    }
    clickBall() {
        var id: string;
        document.querySelectorAll('.ball').forEach(item => {
            var that = this;
            item.addEventListener('click', function (e) {
                console.log(this);
                document.querySelector('.clickedBall') ? document.querySelector('.clickedBall').setAttribute('class', 'ball') : null;
                this.setAttribute('class', 'clickedBall');
                that.clickedBall = true;
                id = this.getAttribute('name');
                e.stopPropagation();
            });
        });
        document.querySelectorAll('.field').forEach(item => {
            var that = this;
            item.addEventListener('mouseover', function () {
                if (that.clickedBall) {
                    document.querySelector('.clicked') ? document.querySelector('.clicked').setAttribute('class', 'field') : null;
                    this.setAttribute('class', 'field clicked');
                }
            });
            item.addEventListener('click', function () {
                if (that.clickedBall) {
                    console.log(id)
                    var ball = document.getElementById(id).children[0];
                    document.getElementById(id).children[0].remove;
                    this.appendChild(ball);
                    document.querySelector('.clickedBall').setAttribute('name', this.id);
                    document.querySelector('.clickedBall').setAttribute('class', 'ball');
                    this.setAttribute('class', 'field');
                    that.clickedBall = false;
                }
            });
        });
    }
}
export default Board;