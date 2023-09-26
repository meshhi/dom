import "./Game.css";
import goblin from "./Goblin";
import player from "./Player";

export default class Game {
  start() {
    document.querySelector("body").appendChild(this.board);
    goblin.jumpOverBoard(this.board);
    this.board.addEventListener("click", (e) => {
      if (e.target.classList.contains("goblin")) {
        player.scoreUp();
        document.querySelector(".score").innerHTML = player.score;
        goblin.beatUp(this.board);
        // const win = document.createElement("div");
        // win.classList.add("win");
        // document.body.appendChild(win);
        // win.innerHTML = "You win!";
        // win.addEventListener(
        //   "click",
        //   (e) => {
        //     e.preventDefault();
        //   },
        //   true
        // );
      }
    });
  }

  initBoard() {
    this.board = document.createElement("div");
    this.board.classList.add("board");
    for (let i = 0; i < 16; i++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      this.board.appendChild(cell);
    }
  }
}
