import * as url from "../img/goblin.png";
import "./Goblin.css";

export class Goblin {
  constructor() {
    this.goblin = document.createElement("img");
    this.goblin.src = url.default;
    this.goblin.alt = "Goblin Logo";
    this.goblin.classList.add("goblin");
    this.appearTime = 0;
  }

  jumpOverBoard = (board) => {
    this.isJumping = setInterval(() => {
      try {
        if (this.appearTime >= 5) {
          clearInterval(this.isJumping);
          const lost = document.createElement("div");
          lost.classList.add("lost");
          document.body.appendChild(lost);
          lost.innerHTML = "You lost!";
          lost.addEventListener(
            "click",
            (e) => {
              e.preventDefault();
            },
            true
          );
        }
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
        this.appearTime += 1;
      } catch (e) {
        console.error(e);
      }
    }, 1000);
  };

  beatUp = (board) => {
    this.goblin.remove();
    this.appearTime = 0;
    clearInterval(this.isJumping);
    this.jumpOverBoard(board);
    console.log("Goblin beat up!");
  };
}

export default new Goblin();
