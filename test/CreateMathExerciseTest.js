const assert = require('assert');
// describe('Simple Test', () => {
//  it('should return 2', () => {
//         assert.equal(1 + 1, 2);
//     });
//  it('should return 9', () => {
//         assert.equal(3 * 3, 9);
//     });
// });

const { CreateMathExerciseCreateRequest } = require("../CreateMathExerciseCreateRequest");

describe('cedar math tests', () => {
    describe('CreateMathExerciseCreateRequestForAddition() Test', () => {
        it('should equal 1', () => {
            const mathExerciseCreateRequest = CreateMathExerciseCreateRequest('addition', '1');
            assert.equal(mathExerciseCreateRequest.numberOfDigitsForFirstNumber, 1);
            assert.equal(mathExerciseCreateRequest.numberOfDigitsForSecondNumber, 1);
            assert.equal(mathExerciseCreateRequest.sumUpMax, 10);
        });
    });
    
describe('math.multiply() Test', () => {
     it('should equal 3', () => {
         const result = math.multiply(3, 1);
             expect(result).to.equal(3);
         });
         it('should equal 10', () => {
             const result = math.multiply(5, 2);
             expect(result).to.equal(10);
         });
     });
});