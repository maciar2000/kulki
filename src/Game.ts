import Ball from './Ball';
import { set, settings } from './settings';

class Game {
    startTime: Date;
    constructor() {
        this.startTime = new Date();
    }
    create3Balls(): void {
        for (let i = 0; i < 3; i++) {
            let ball = new Ball();
            ball.create();
        }
    }
    startGame() {
        this.create3Balls();
        this.clickBall();
    }
    clickBall(): void {
        let clickField = this.clickField;
        document.querySelectorAll('.ball').forEach(item => {
            item.addEventListener('click', function(e) {
                document.querySelector('.clickedBall') ? document.querySelector('.clickedBall').setAttribute('class', 'ball') : null;
                this.setAttribute('class', 'clickedBall');
                let id = this.getAttribute('name');
                set('ballId', id);
                e.stopPropagation();
                clickField();
            });
        });
    }
    clickField(): void {
        document.querySelectorAll('.field').forEach(item => {
            item.addEventListener('mouseover', function () {
                document.querySelector('.hoverField') ? document.querySelector('.hoverField').setAttribute('class', 'field') : null;
                this.setAttribute('class', 'field hoverField');
            });
            item.addEventListener('click', function () {
                console.log(this.id, settings.ballId)
                set('fieldId', this.id);
            });
        });
    }
}
export default Game;