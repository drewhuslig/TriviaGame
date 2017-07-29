$( document ).ready(function() {
    
    var questions = ["Metallica has won how many MTV Video Music Awards?",
                     "What year was Metallica inducted into the Rock and Roll Hall of Fame?",
                     "Who has never been the bassist for Metallica?",
                     "What Metallica song is based off an Ernest Hemingway book by the same name?",
                     "Metallica's S&M album was performed with what symphony?",
                     "What famous guitarist did Kirk Hammett take lessons from?",
                     "How many studio albums has Metallica released to date?",
                     "Which album did Cliff Burton not perfom on?",
                     "What Metallica album was the first to debut as #1 on the Billboard charts?",
                     "A French printing press made a mistake and printed the covers of 'Ride the Lightning' in what color?"];
    var ans1 = ["1",
                "2007",
                "David Ellefson",
                "Of Wolf And Man",
                "Seattle",
                "Eddie Van Halen",
                "8",
                "Master Of Puppets",
                "Hardwired... To Self Destruct",
                "Green"];
    var ans2 = ["2",
                "2008",
                "Cliff Burton",
                "To Live Is To Die",
                "San Francisco",
                "Joe Satriani",
                "9",
                "Ride The Lightning",
                "St. Anger",
                "Red"];
    var ans3 = ["3",
                "2009",
                "Jason Newsted",
                "For Whom The Bell Tolls",
                "San Antonio",
                "Steve Vai",
                "10",
                "Kill 'Em All",
                "Master Of Puppets",
                "Blue"];
    var ans4 = ["4",
                "2010",
                "Rob Trijillo",
                "Seek And Destroy",
                "St. Louis",
                "Ace Frehley",
                "11",
                "...And Justice For All",
                "Metallica (Black Album)",
                "Yellow"];
    var key = ["4", "3", "1", "3", "2", "2", "3", "4", "4", "1"];
    var correctAns = ["4", "2009", "David Ellefson", "For Whom The Bell Tolls", "San Francisco", "Joe Satriani", "10",
                      "...And Justice For All", "Metallica (Black Album)", "Green"];

    var questionNum = 0;
    var gameStart = false;

    var correct = 0;
    var wrong = 0;

    $('body').on('click', '#start', function() {
        gameStart = true
        $(".start").empty();
        $(".intro").empty();
        questionNum = 0;
        correct = 0;
        wrong = 0;
        $("#result").empty();
        fillText();
    });

    $(".answer").click(function(){
        if(gameStart === true){
            if($(this).attr("data") === key[questionNum]){
                correct++;
                $("#result").html("<br>Correct!<br><br>");
            }else{
                wrong++;
                $("#result").html("<br>Incorrect!<br><br>");
            };
        };
        $("#ans1").empty();
        $("#ans2").empty();
        $("#ans3").empty();
        $("#ans4").empty();
        $("#correctAns").html(correctAns[questionNum]);
        questionNum++;
        if(questionNum < 10){
            setTimeout(fillText, 3000);
        }else{
            setTimeout(end, 3000);
        };
    });

    function fillText(){
        $("#question").html(questions[questionNum]);
        $("#ans1").html(ans1[questionNum]);
        $("#ans2").html(ans2[questionNum]);
        $("#ans3").html(ans3[questionNum]);
        $("#ans4").html(ans4[questionNum]);
        $("#result").empty();
        $("#correctAns").empty();
    }

    function end(){
        $("#question").empty();
        $("#correctAns").empty();
        gameStart = false
        $("#result").html("You answered " + correct + " correct!<br>You answered " + wrong + " wrong!");
        $(".start").html('<br>Press start to play again.<br><button id="start">Start</button>');
    }

});