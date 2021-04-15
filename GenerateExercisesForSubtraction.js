function GenerateExercisesForSubtraction(mathExerciseCreateRequest) {
    var questions = [];
    for(i = 1; i <= mathExerciseCreateRequest.numberOfQs ; i++)
    {     
        var validQuestion = false;
        var question;

        while(!validQuestion)
        {
            validQuestion = true;
            question = GenerateAQuestionForSubtraction();

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

    function GenerateAQuestionForSubtraction() {
        var x = Math.floor(GenerateRandomIntBetween(1,Math.pow(10, mathExerciseCreateRequest.numberOfDigitsForFirstNumber)));
        var y = Math.floor(GenerateRandomIntBetween(1,Math.pow(10, mathExerciseCreateRequest.numberOfDigitsForSecondNumber)));
        var z = x + y;
        question = {
            x : z,
            y : y,
            answer: x
        };
        return question;
    }

    function GenerateRandomIntBetween(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
exports.GenerateExercisesForSubtraction = GenerateExercisesForSubtraction;