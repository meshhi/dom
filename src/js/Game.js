import './Game.css';
import goblin from './Goblin';

export default class Game {
    start() {
        document.querySelector('body').appendChild(this.board);
        goblin.jumpOverBoard(this.board);
        this.board.addEventListener('click', (e) => {
            if (e.target.classList.contains('goblin')) {
                goblin.beatUp();
                const win = document.createElement('div');
                win.classList.add('win');
                document.body.appendChild(win);
                win.innerHTML = 'You win!';
                win.addEventListener('click', (e) => {
                    e.preventDefault();
                }, true);
            }
        })
    }

    initBoard() {
        this.board = document.createElement('div');
        this.board.classList.add('board');
        for (let i = 0; i < 16; i++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            this.board.appendChild(cell);
        }
    }
}
