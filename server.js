var express = require('express');
const { MathExerciseCreateRequest } = require("./MathExerciseCreateRequest");
const { MathExercisesGenerator } = require("./MathExercisesGenerator");
const { MathLevelMapper } = require("./MathLevelMapper");
var app = express();

//localhost:3000/mathexercises?operation=addition&level=1
app.get('/mathexercises', function(req, res) {

    var questions = [];
    var operation = req.query.operation;
    var level = req.query.level;
    try{
        var mathExerciseCreateRequest = MathLevelMapper(operation, level);
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