var express = require('express');
const { CreateMathExerciseCreateRequest } = require("./CreateMathExerciseCreateRequest");
const { MathExerciseCreateRequest } = require("./MathExerciseCreateRequest");
const { MathExercisesGenerator } = require("./MathExercisesGenerator");
var app = express();

//localhost:3000/mathexercises?operation=addition&level=1
app.get('/mathexercises', function(req, res) {

    var questions = [];
    var operation = req.query.operation;
    var level = req.query.level;
    try{
        var mathExerciseCreateRequest = CreateMathExerciseCreateRequest(operation, level);
        questions = MathExercisesGenerator(mathExerciseCreateRequest);
        res.status(200).json(questions);
    }
    catch(ex){
        res.status(400).send('Bad Request.');
    }
});

var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    console.log('Server running at http://127.0.0.1:' + port + '/');
});