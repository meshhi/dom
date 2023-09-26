export class Player {
  constructor() {
    this.score = 0;
  }

  scoreUp() {
    this.score += 1;
  }
}

export default new Player();
