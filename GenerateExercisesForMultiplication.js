function GenerateExercisesForMultiplication(mathExerciseCreateRequest) {
    var questions = [];
    for(i = 1; i <= mathExerciseCreateRequest.numberOfQs ; i++)
    {     
        var validQuestion = false;
        var question;

        while(!validQuestion)
        {
            validQuestion = true;
            question = GenerateAQuestionForMultiplication();

            if(question.x.toString().length > mathExerciseCreateRequest.numberOfDigitsForFirstNumber)
            {
                validQuestion = false;
            }
            if(question.y.toString().length > mathExerciseCreateRequest.numberOfDigitsForSecondNumber)
            {
                validQuestion = false;
            }     
            if(mathExerciseCreateRequest.firstNumberBigger)
            {
                if(question.x < question.y)
                {
                    validQuestion = false;
                }
            }
            if(mathExerciseCreateRequest.allowNegative)
            {
                if(question.answer < 0)
                {
                    validQuestion = false;
                }
            }
            if(question.x > mathExerciseCreateRequest.sumUpMax )
            {
                validQuestion = false;
            }
        }   
        
        data = {
            question: `${question.x} ${mathExerciseCreateRequest.operation} ${question.y} = `,
            answer: question.answer
        };
        questions.push(data);
    }
    return questions;

    function GenerateAQuestionForMultiplication() {
        var x = 0;
        var y = 0;
        if(mathExerciseCreateRequest.firstNumber != 0)
        {
            x = mathExerciseCreateRequest.firstNumber;
        }
        else
        {
            x = Math.floor(GenerateRandomIntBetween(1,Math.pow(10, mathExerciseCreateRequest.numberOfDigitsForFirstNumber)));
        }

        if(mathExerciseCreateRequest.secondNumber != 0)
        {
            y = mathExerciseCreateRequest.secondNumber;
        }
        else
        {
            y = Math.floor(GenerateRandomIntBetween(1,Math.pow(10, mathExerciseCreateRequest.numberOfDigitsForSecondNumber)));
        }
        
        var z = x * y;
        question = {
            x : x,
            y : y,
            answer: z
        };
        return question;
    }

    function GenerateRandomIntBetween(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
exports.GenerateExercisesForMultiplication = GenerateExercisesForMultiplication;
