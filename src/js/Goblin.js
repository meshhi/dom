import * as url from "../img/goblin.png";
import "./Goblin.css";

export class Goblin {
  constructor() {
    this.goblin = document.createElement("img");
    this.goblin.src = url.default;
    this.goblin.alt = "Goblin Logo";
    this.goblin.classList.add("goblin");
  }

  jumpOverBoard = (board) => {
    this.isJumping = setInterval(() => {
      try {
        this.goblin.remove();
        let newCurrentPosition = Math.floor(
          Math.random() * board.children.length
        );
        while (newCurrentPosition == this.currentPosition) {
          newCurrentPosition = Math.floor(
            Math.random() * board.children.length
          );
        }
        this.currentPosition = newCurrentPosition;
        board.children[this.currentPosition].append(this.goblin);
      } catch (e) {
        console.error(e);
      }
    }, 1000);
  };

  beatUp = (board) => {
    this.goblin.remove();
    clearInterval(this.isJumping);
    this.jumpOverBoard(board);
    console.log("Goblin beat up!");
  };
}

export default new Goblin();
