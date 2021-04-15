const { GenerateExercisesForAddition } = require("./GenerateExercisesForAddition");
const { GenerateExercisesForSubtraction } = require("./GenerateExercisesForSubtraction");
const { GenerateExercisesForMultiplication } = require("./GenerateExercisesForMultiplication");
const { GenerateExercisesForDivision } = require("./GenerateExercisesForDivision");

function MathExercisesGenerator(mathExerciseCreateRequest) {
    var questions;
    switch (mathExerciseCreateRequest.operation) {
        case 'addition':
            questions = GenerateExercisesForAddition(mathExerciseCreateRequest);
            break;
        case 'subtraction':
            questions = GenerateExercisesForSubtraction(mathExerciseCreateRequest);
            break;
        case 'multiplication':
            questions = GenerateExercisesForMultiplication(mathExerciseCreateRequest);
            break;
        case 'division':
            questions = GenerateExercisesForDivision(mathExerciseCreateRequest);
            break;
        default:
        // code block
    }
    return questions;
    //questions.push(data);
}
exports.MathExercisesGenerator = MathExercisesGenerator;
