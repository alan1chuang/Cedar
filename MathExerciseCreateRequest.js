class MathExerciseCreateRequest {
    constructor(numberOfQs, operation)
    {
        this.numberOfQs = numberOfQs;
        this.operation = operation;
    }

    setNumberOfDigitsForFirstNumber(numberOfDigitsForFirstNumber)
    {
        this.numberOfDigitsForFirstNumber = numberOfDigitsForFirstNumber;
        return this;
    }

    setNumberOfDigitsForSecondNumber(numberOfDigitsForSecondNumber)
    {
        this.numberOfDigitsForSecondNumber = numberOfDigitsForSecondNumber;
        return this;        
    }

    setNumberOfDigitsForAnswer(numberOfDigitsForAnswer)
    {
        this.numberOfDigitsForAnswer = numberOfDigitsForAnswer;
        return this;        
    }

    setFirstNumber(firstNumber)
    {
        this.firstNumber = firstNumber;
        return this;
    }

    setSecondNumber(secondNumber)
    {
        this.secondNumber = secondNumber;
        return this;
    }

    setFirstNumberBigger(firstNumberBigger)
    {
        this.firstNumberBigger = firstNumberBigger;
        return this;
    }

    setAllowNegaive(allowNegative)
    {
        this.allowNegative = allowNegative;
        return this;
    }

    setSumUpMax(sumUpMax)
    {
        this.sumUpMax = sumUpMax;
        return this;
    }

    build()
    {
        if(!('numberOfDigitsForFirstNumber' in this))
        {
            throw new Error('numberOfDigitsForFirstNumber is missing')
        }
        if(!('numberOfDigitsForSecondNumber' in this))
        {
            throw new Error('numberOfDigitsForSecondNumber is missing')
        }
        if(!('firstNumberBigger' in this))
        {
            this.firstNumberBigger = false;
        }
        if(!('allowNegative' in this))
        {
            this.allowNegative = false;
        }
        if(!('sumUpMax' in this))
        {
            this.sumUpMax = 100;
        }
        if(!('firstNumber' in this))
        {
            this.firstNumber = 0;
        }
        if(!('secondNumber' in this))
        {
            this.secondNumber = 0;
        }
        if(!('numberOfDigitsForAnswer' in this))
        {
            this.numberOfDigitsForAnswer = 0;
        }
        return new MathExerciseCreateRequest(
            this.numberOfQs,
            this.operation,
            this.numberOfDigitsForFirstNumber,
            this.numberOfDigitsForSecondNumber,
            this.firstNumberBigger,
            this.allowNegative,
            this.sumUpMax,
            this.firstNumber,
            this.secondNumber,
            this.numberOfDigitsForAnswer
            );
    }
}
exports.MathExerciseCreateRequest = MathExerciseCreateRequest;
