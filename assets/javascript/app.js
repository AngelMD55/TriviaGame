// questions, choices and correct answer
var triviaGame = [{
    question: "Which of this isn't one of Daenerys Targaryen dragons?",
    choices: ["Drogon", "Rhaegal", "Viserion", "Shenron"],
    correctAnswer: 3
},
{
    question: "Who was Daenerys first husband?",
    choices: ["Khal Mormont", "John Snow", "Khal Drogo", "Khal Jhaqo"],
    correctAnswer: 2
},
{
    question: "Which Stark family direwolf was killed in retaliation for an attack on Prince Joffrey?",
    choices: ["Ghost", "Lady", "Nymeria", "Summer"],
    correctAnswer: 1
},
{
    question: "What was the name of Ned Stark's greatsword?",
    choices: ["Ice", "Oathkeeper", "Widow's Wail", "Neddle"],
    correctAnswer: 0
},
{
    question: "What is the surname given to bastards born in Dorne?",
    choices: ["rivers", "waters", "sand", "snow"],
    correctAnswer: 2
},
{
    question: "Who is known as 'The-King-Beyond-the-Wall'?",
    choices: ["Tormund Giantsbane", "Stannis Baratheon", "The Knight King", "Mance Rayder"],
    correctAnswer: 3
},
{
    question: "Who is the ruler of the Iron Islands at the beginning of Game of Thrones?",
    choices: ["Yara Greyjoy", "Euron Greyjoy", "Balon Greyjoy", "Aeron Greyjoy"],
    correctAnswer: 2
},
{
    question: "Who delivered the fatal blow to the King-in-the North, Robb Stark?",
    choices: ["Roose Bolton", "Walder Frey", "Alister Thorne", "Ramsey Bolton"],
    correctAnswer: 0
},
{
    question: "Who was the fool who helped Sansa Stark escape King's Landing after King Joffrey's death?",
    choices: ["Eddison Tollet", "Dontos Hollard", "Vardins Egen", "Mord"],
    correctAnswer: 1
},
{
    question: "The wildling Gilly has a son named Sam, who is the father?",
    choices: ["Jeor Mormont", "Samwell Tarly", "Craster", "Tormund Giantsbane"],
    correctAnswer: 2
}
]
// on click hide button, show div and start timer

$("#start").on("click", function () {
    $(this).hide()
    showDiv()
    timer.start()
})

// function to show hidden div after on click start
function showDiv() {

    document.getElementById("question").style.display = "block";

}

for (var i = 0; i < triviaGame.length; i++) {

    // console.log(triviaGame[i].question)
    // console.log(triviaGame[i].choices)

    var questionDiv = $("<div>").attr("question", triviaGame[i].question);
    var obj = triviaGame[i].choices;

    // for loop to print all choices with atributes,
    for (var j = 0; j < obj.length; j++) {

        var fourChoice = (obj[j]);
        // console.log(fourChoice)

        var choicesDiv = $("<input>" + fourChoice + "<br>").attr({
            "type": "radio",
            "name": "question" + i,
            "value": obj.indexOf(fourChoice)
        })
        questionDiv.append(choicesDiv);

    }

    // console.log(questionDiv.html());

    questionDiv.prepend(triviaGame[i].question + "<br>");
    // console.log(questionDiv.html());
    $("#question").append(questionDiv);
}

// Timer
var intervalId;

var timer = {
    time: 180,

    count: function () {
        timer.time--;
        var converted = timer.timeConverter(timer.time);
        $("#timer").text(converted);
        timer.stop()

    },

    start: function () {
        // console.log("inside the start method")
        intervalId = setInterval(timer.count, 1000)



    },

    timeConverter: function (t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds, 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        } else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    },
    stop: function () {
        if (timer.time === 0) {
            $("#question").hide()
            $("#timer").hide()
            clearInterval(intervalId);
            show()
        }
    }
}

// This is for the submit button
var done = $("<button>").addClass("btn btn-warning btn-md btn-block mt-3")
    .text("Submit")

$("#question").append(done)

// This is for getting Results
var score = 0
done.on("click", show)
function show (){
        // $.each($("input[type='radio']:checked")).val()

        $("#question").hide()
        $("#timer").hide()
    
        $.each($("input[type='radio']:checked"), checkAnswer);
    
        function checkAnswer(index, item) {
            // console.log($(this).val(), "YOOOOO")
    
            if ($(this).val() == triviaGame[index].correctAnswer) {
                score++
                console.log(score)
            }
            // console.log(triviaGame[index].correctAnswer)
        };
        // Displays results message
        $("#score").html("You Guessed " + score + "/10" + "<br>")
        if (score < 7) {
            $("#result").text("You have failed the Seven Kingdoms")
            var image = $("<img>").attr("src", "assets/images/kw.jpg")
            $("#score").append(image)
        } else if (score <= 9) {
            $("#result").text("Keep Practicing you are a great Squire")
            var image1 = $("<img>").attr("src", "assets/images/squire.gif")
            $("#score").append(image1)
        } else {
            $("#result").text("You are ready to rule the Seven Kingdoms")
            var image2 = $("<img>").attr("src", "assets/images/iron.jpg")
            $("#score").append(image2)
        }
}