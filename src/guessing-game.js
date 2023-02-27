class GuessingGame {
        constructor() {}
    setRange(min, max) {
        this.minNum = min;
        this.maxNum = max;
    }
    guess() {
        this.result =   Math.round((this.maxNum + this.minNum) / 2);
        return this.result;
    }
    lower() {
        return this.maxNum = this.result;
    }
    greater() {
        return this.minNum = this.result;
    }
}
module.exports = GuessingGame;
