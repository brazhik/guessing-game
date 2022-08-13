class GuessingGame {
  constructor() {
    this.A = [];
    this.L = 0;
    this.R = 0;
    this.m = 0;
  }

  setRange(min, max) {
    for (let i = min; i <= max; i++) {
      this.A.push(i);
    }

    this.L = 0;
    this.R = this.A.length - 1;
  }

  guess() {
    if (this.L <= this.R) {
      this.m = this.L + Math.round((this.R - this.L) / 2);
    }

    return this.A[this.m];
  }

  lower() {
    this.R = this.m;
  }

  greater() {
    this.L = this.m;
  }
}

module.exports = GuessingGame;

