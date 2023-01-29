"use strict";
exports.__esModule = true;
exports.Bowling = void 0;
var Bowling = /** @class */ (function () {
    function Bowling() {
        this.throws = [];
    }
    Bowling.prototype.addThrow = function (pins) {
        this.throws.push(pins);
    };
    Bowling.prototype.getScore = function () {
        var score = 0;
        for (var frameIndex = 0, throwIndex = 0; frameIndex < 10; ++frameIndex) {
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
    };
    Bowling.prototype.isSpare = function (throwIndex) {
        return this.throws[throwIndex] + this.throws[throwIndex + 1] === 10;
    };
    Bowling.prototype.isStrike = function (throwIndex) {
        return this.throws[throwIndex] === 10;
    };
    return Bowling;
}());
exports.Bowling = Bowling;
