const { MathExerciseCreateRequest } = require("./MathExerciseCreateRequest");

function MathLevelMapper(operation, level) {
    var mathExerciseCreateRequest;
    switch (operation) {
        case 'addition':
            mathExerciseCreateRequest = CreateMathExerciseCreateRequestForAddition(level);
            break;
        case 'subtraction':
            mathExerciseCreateRequest = CreateMathExerciseCreateRequestForSubtraction(level);
            break;
        case 'multiplication':
            mathExerciseCreateRequest = CreateMathExerciseCreateRequestForMultiplication(level);
            break;
        case 'division':
            mathExerciseCreateRequest = CreateMathExerciseCreateRequestForDivision(level);
            break;
        default:
            console.log(new Error('Bad Request.'))
            throw new Error('Bad Request.');
    }
    return mathExerciseCreateRequest;
}

function CreateMathExerciseCreateRequestForAddition(level)
{
    var numberOfQs = 20;
    var mathExerciseCreateRequest;
    switch(level)
    {
        case '1':
            mathExerciseCreateRequest = new MathExerciseCreateRequest(numberOfQs, "addition")
            .setNumberOfDigitsForFirstNumber(1)
            .setNumberOfDigitsForSecondNumber(1)
            .setAllowNegaive(false)
            .setFirstNumberBigger(false)
            .setSumUpMax(10)
            break;
        case '2':
            mathExerciseCreateRequest = new MathExerciseCreateRequest(numberOfQs, "addition")
            .setNumberOfDigitsForFirstNumber(2)
            .setNumberOfDigitsForSecondNumber(1)
            .setAllowNegaive(false)
            .setFirstNumberBigger(false)
            .setSumUpMax(20)
            break;
        case '3':
                mathExerciseCreateRequest = new MathExerciseCreateRequest(numberOfQs, "addition")
                .setNumberOfDigitsForFirstNumber(2)
                .setNumberOfDigitsForSecondNumber(2)
                .setAllowNegaive(false)
                .setFirstNumberBigger(true)
                .setSumUpMax(100)
                break;
    }
    return mathExerciseCreateRequest;
}

function CreateMathExerciseCreateRequestForSubtraction(level)
{
    var numberOfQs = 20;
    var mathExerciseCreateRequest;
    switch(level)
    {
        case '1':
            mathExerciseCreateRequest = new MathExerciseCreateRequest(numberOfQs, "subtraction")
            .setNumberOfDigitsForFirstNumber(1)
            .setNumberOfDigitsForSecondNumber(1)
            .setAllowNegaive(false)
            .setFirstNumberBigger(false)
            .setSumUpMax(10)
            break;
        case '2':
            mathExerciseCreateRequest = new MathExerciseCreateRequest(numberOfQs, "subtraction")
            .setNumberOfDigitsForFirstNumber(2)
            .setNumberOfDigitsForSecondNumber(1)
            .setAllowNegaive(false)
            .setFirstNumberBigger(false)
            .setSumUpMax(20)
            break;
        case '3':
            mathExerciseCreateRequest = new MathExerciseCreateRequest(numberOfQs, "subtraction")
            .setNumberOfDigitsForFirstNumber(2)
            .setNumberOfDigitsForSecondNumber(2)
            .setAllowNegaive(false)
            .setFirstNumberBigger(true)
            .setSumUpMax(30)
            break;
    }
    return mathExerciseCreateRequest;
}

function CreateMathExerciseCreateRequestForMultiplication(level)
{    
    var numberOfQs = 20;
    var mathExerciseCreateRequest;
    switch(level)
    {
        case '1':
            mathExerciseCreateRequest = new MathExerciseCreateRequest(numberOfQs, "multiplication")
            .setFirstNumber(2)
            .setSecondNumber(0)
            .setNumberOfDigitsForFirstNumber(1)
            .setNumberOfDigitsForSecondNumber(1)
            break;
        case '2':
            mathExerciseCreateRequest = new MathExerciseCreateRequest(numberOfQs, "multiplication")
            .setFirstNumber(3)
            .setSecondNumber(0)
            .setNumberOfDigitsForFirstNumber(1)
            .setNumberOfDigitsForSecondNumber(1)
            break;
        case '3':
            mathExerciseCreateRequest = new MathExerciseCreateRequest(numberOfQs, "multiplication")
            .setFirstNumber(4)
            .setSecondNumber(0)
            .setNumberOfDigitsForFirstNumber(1)
            .setNumberOfDigitsForSecondNumber(1)
            break;
        case '4':
            mathExerciseCreateRequest = new MathExerciseCreateRequest(numberOfQs, "multiplication")
            .setFirstNumber(5)
            .setSecondNumber(0)
            .setNumberOfDigitsForFirstNumber(1)
            .setNumberOfDigitsForSecondNumber(1)
            break;
        case '5':
            mathExerciseCreateRequest = new MathExerciseCreateRequest(numberOfQs, "multiplication")
            .setFirstNumber(6)
            .setSecondNumber(0)
            .setNumberOfDigitsForFirstNumber(1)
            .setNumberOfDigitsForSecondNumber(1)
            break;
        case '6':
            mathExerciseCreateRequest = new MathExerciseCreateRequest(numberOfQs, "multiplication")
            .setFirstNumber(7)
            .setSecondNumber(0)
            .setNumberOfDigitsForFirstNumber(1)
            .setNumberOfDigitsForSecondNumber(1)
            break;
        case '7':
            mathExerciseCreateRequest = new MathExerciseCreateRequest(numberOfQs, "multiplication")
            .setFirstNumber(8)
            .setSecondNumber(0)
            .setNumberOfDigitsForFirstNumber(1)
            .setNumberOfDigitsForSecondNumber(1)
            break;
        case '8':
            mathExerciseCreateRequest = new MathExerciseCreateRequest(numberOfQs, "multiplication")
            .setFirstNumber(9)
            .setSecondNumber(0)
            .setNumberOfDigitsForFirstNumber(1)
            .setNumberOfDigitsForSecondNumber(1)
            break;
    }
    return mathExerciseCreateRequest;
}

function CreateMathExerciseCreateRequestForDivision(level)
{
    var numberOfQs = 20;
    var mathExerciseCreateRequest;
    switch(level)
    {
        case '1':
            mathExerciseCreateRequest = new MathExerciseCreateRequest(numberOfQs, "division")
            .setFirstNumber(0)
            .setSecondNumber(2)
            .setNumberOfDigitsForFirstNumber(2)
            .setNumberOfDigitsForSecondNumber(1)
            .setNumberOfDigitsForAnswer(1)
            break;
        case '2':
            mathExerciseCreateRequest = new MathExerciseCreateRequest(numberOfQs, "division")
            .setFirstNumber(0)
            .setSecondNumber(3)
            .setNumberOfDigitsForFirstNumber(2)
            .setNumberOfDigitsForSecondNumber(1)
            .setNumberOfDigitsForAnswer(1)
            break;
        case '3':
        //     mathExerciseCreateRequest = new MathExerciseCreateRequest(numberOfQs, "multiplication")
        //     .setFirstNumber(4)
        //     .setSecondNumber(0)
        //     .setNumberOfFirstDigit(1)
        //     .setNumberOfSecondDigit(1)
        //     break;
        // case '4':
        //     mathExerciseCreateRequest = new MathExerciseCreateRequest(numberOfQs, "multiplication")
        //     .setFirstNumber(5)
        //     .setSecondNumber(0)
        //     .setNumberOfFirstDigit(1)
        //     .setNumberOfSecondDigit(1)
        //     break;
        // case '5':
        //     mathExerciseCreateRequest = new MathExerciseCreateRequest(numberOfQs, "multiplication")
        //     .setFirstNumber(6)
        //     .setSecondNumber(0)
        //     .setNumberOfFirstDigit(1)
        //     .setNumberOfSecondDigit(1)
        //     break;
        // case '6':
        //     mathExerciseCreateRequest = new MathExerciseCreateRequest(numberOfQs, "multiplication")
        //     .setFirstNumber(7)
        //     .setSecondNumber(0)
        //     .setNumberOfFirstDigit(1)
        //     .setNumberOfSecondDigit(1)
        //     break;
        // case '7':
        //     mathExerciseCreateRequest = new MathExerciseCreateRequest(numberOfQs, "multiplication")
        //     .setFirstNumber(8)
        //     .setSecondNumber(0)
        //     .setNumberOfFirstDigit(1)
        //     .setNumberOfSecondDigit(1)
        //     break;
        // case '8':
        //     mathExerciseCreateRequest = new MathExerciseCreateRequest(numberOfQs, "multiplication")
        //     .setFirstNumber(9)
        //     .setSecondNumber(0)
        //     .setNumberOfFirstDigit(1)
        //     .setNumberOfSecondDigit(1)
        //     break;
    }
    return mathExerciseCreateRequest;
}
exports.MathLevelMapper = MathLevelMapper;
