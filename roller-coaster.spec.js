const canPlay = require("./roller-coaster");

describe('Roller Coaster', () => {
    describe('Can Play', () => {

        describe('Right Height', () => {
            test('When age is ok should return true', () => {
                expect(
                    canPlay({ height: 160, age: 18, isAlone: true})
                ).toBe(true);
            });
    
            test('When age is not ok and is not alone return true', () => {
                expect(
                    canPlay({ height: 160, age: 17, isAlone: false})
                ).toBe(true);
            });
    
            test('When age is not ok and is alone return false', () => {
                expect(
                    canPlay({ height: 160, age: 17, isAlone: true})
                ).toBe(false);
            });
        });
    
        describe('Too short', () => {
            test('When age is ok should return false', () => {
                expect(
                    canPlay({ height: 159, age: 18, isAlone: true})
                ).toBe(false);
            });
    
            test('When age is not ok and is not alone return false', () => {
                expect(
                    canPlay({ height: 149, age: 17, isAlone: false})
                ).toBe(false);
            });
    
            test('When age is not ok and is alone return false', () => {
                expect(
                    canPlay({ height: 139, age: 17, isAlone: true})
                ).toBe(false);
            });
        });
    
        describe('Too tall', () => {
            test('When age is ok should return true', () => {
                expect(
                    canPlay({ height: 170, age: 18, isAlone: true})
                ).toBe(true);
            });
    
            test('When age is not ok and is not alone return true', () => {
                expect(
                    canPlay({ height: 180, age: 17, isAlone: false})
                ).toBe(true);
            });
    
            test('When age is not ok and is alone return false', () => {
                expect(
                    canPlay({ height: 190, age: 17, isAlone: true})
                ).toBe(false);
            });
        });
    });
});