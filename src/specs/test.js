"use strict";
exports.__esModule = true;
var bowling_1 = require("../methods/bowling");
describe("Bowling Recruitment Challenge.", function () {
    var bowling;
    beforeEach(function () {
        bowling = new bowling_1.Bowling();
    });
    var addThrows = function (pins, times) {
        for (var i = 0; i < times; ++i) {
            bowling.addThrow(pins);
        }
    };
    it('A Gutter Game!', function () {
        addThrows(0, 20);
        expect(bowling.getScore()).toBe(0);
    });
    it('An all one game.', function () {
        addThrows(1, 20);
        expect(bowling.getScore()).toBe(20);
    });
    it('Spare followed by 3.', function () {
        addThrows(5, 2);
        addThrows(3, 1);
        expect(bowling.getScore()).toBe(16);
    });
    it('Strike followed by 3 and a 4.', function () {
        addThrows(10, 1);
        addThrows(3, 1);
        addThrows(4, 1);
        expect(bowling.getScore()).toBe(24);
    });
    it('A Perfect Game!', function () {
        addThrows(10, 12);
        expect(bowling.getScore()).toBe(300);
    });
});
