import {Bowling} from "../methods/bowling";

describe("Bowling Recruitment Challenge.", () => {

    let bowling: Bowling;

    beforeEach(() => { 
        bowling = new Bowling();
    })

    let addThrows = (pins: number, times: number) => {
        for (let i = 0; i < times; ++i){
            bowling.addThrow(pins);
        }
    }

    it('A Gutter Game!', ()=> {
        addThrows(0, 20);
        expect(bowling.getScore()).toBe(0);
    });

    it('An all one game.', ()=> {
        addThrows(1, 20);
        expect(bowling.getScore()).toBe(20);
    })

    it('Spare followed by 3.', ()=> {
        addThrows(5, 2);
        addThrows(3, 1);
        expect(bowling.getScore()).toBe(16);
    })

    it('Strike followed by 3 and a 4.', ()=> {
        addThrows(10, 1);
        addThrows(3, 1);
        addThrows(4, 1);
        expect(bowling.getScore()).toBe(24);
    });

    it('A Perfect Game!', ()=> {
        addThrows(10, 12);
        expect(bowling.getScore()).toBe(300);
    });

});