"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bowling = void 0;
class Bowling {
    constructor() {
        this.throws = [];
    }
    addThrow(pins) {
        this.throws.push(pins);
    }
    getScore() {
        let score = 0;
        for (let frameIndex = 0, throwIndex = 0; frameIndex < 10; ++frameIndex) {
            score += this.throws[throwIndex];
            score += this.throws[throwIndex + 1];
            if (this.isSpare(throwIndex) || this.isStrike(throwIndex)) {
                score += this.throws[throwIndex + 2];
            }
            if (this.isStrike(throwIndex)) {
                throwIndex++;
            }
            else {
                throwIndex += 2;
            }
        }
        return score;
    }
    isSpare(throwIndex) {
        return this.throws[throwIndex] + this.throws[throwIndex + 1] === 10;
    }
    isStrike(throwIndex) {
        return this.throws[throwIndex] === 10;
    }
}
exports.Bowling = Bowling;
