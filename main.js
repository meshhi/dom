/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/Goblin.js


class Goblin {
  constructor() {
    this.goblin = document.createElement("img");
    this.goblin.src = goblin_namespaceObject;
    this.goblin.alt = "Goblin Logo";
    this.goblin.classList.add("goblin");
    this.appearTime = 0;
  }
  jumpOverBoard = board => {
    this.isJumping = setInterval(() => {
      try {
        if (this.appearTime >= 5) {
          clearInterval(this.isJumping);
          const lost = document.createElement("div");
          lost.classList.add("lost");
          document.body.appendChild(lost);
          lost.innerHTML = "You lost!";
          lost.addEventListener("click", e => {
            e.preventDefault();
          }, true);
        }
        this.goblin.remove();
        let tempPositionArray = [];
        for (let i = 1; i < board.children.length; i++) {
          tempPositionArray.push(i);
        }
        let currPosition = tempPositionArray.indexOf(this.currentPosition);
        if (currPosition) {
          tempPositionArray = tempPositionArray.filter(item => item !== currPosition);
        }
        let newCurrentPosition = Math.floor(Math.random() * tempPositionArray.length);
        this.currentPosition = newCurrentPosition;
        board.children[this.currentPosition].append(this.goblin);
        this.appearTime += 1;
      } catch (e) {
        console.error(e);
      }
    }, 1000);
  };
  beatUp = board => {
    this.goblin.remove();
    this.appearTime = 0;
    clearInterval(this.isJumping);
    this.jumpOverBoard(board);
    console.log("Goblin beat up!");
  };
}
/* harmony default export */ const js_Goblin = (new Goblin());
;// CONCATENATED MODULE: ./src/js/Player.js
class Player {
  constructor() {
    this.score = 0;
  }
  scoreUp() {
    this.score += 1;
  }
}
/* harmony default export */ const js_Player = (new Player());
;// CONCATENATED MODULE: ./src/js/Game.js



class Game {
  start() {
    document.querySelector("body").appendChild(this.board);
    js_Goblin.jumpOverBoard(this.board);
    this.board.addEventListener("click", e => {
      if (e.target.classList.contains("goblin")) {
        js_Player.scoreUp();
        document.querySelector(".score").innerHTML = js_Player.score;
        js_Goblin.beatUp(this.board);
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
;// CONCATENATED MODULE: ./src/js/app.js
// TODO: write code here

const game = new Game();
game.initBoard();
game.start();
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;