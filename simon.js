var list = [];
var numList = [];
var clickList = [];


function start() {
    $(document).off("keydown").keydown(function () {
        if (list.length === 0) {
            var num = Math.floor((Math.random() * 4) + 1);
            playGame(num);
            list.push(num)
        }
    });

}


function playGame(number) {
    var i = numList.length + 1;
    $("h1").text("Level " + i);
    numList.push(number + "" + i);
    switch (number) {
        case 1:
            var redSound = new Audio('./sounds/red.mp3');
            redSound.play();
            animation(".red");
            break;

        case 2:
            var greenSound = new Audio('./sounds/green.mp3')
            greenSound.play();
            animation(".green");
            break;

        case 3:
            var blueSound = new Audio('./sounds/blue.mp3')
            blueSound.play();
            animation(".blue");
            break;

        case 4:
            var yellowSound = new Audio('./sounds/yellow.mp3')
            yellowSound.play();
            animation(".yellow");
            break;

        default:
            console.log("hello");
    }
    clickFunc();
}

function animation(name) {
    $(name).addClass("pressed");
    setTimeout(function () {
        $(name).removeClass("pressed");
    }, 100)
}



function clickFunc() {

    $(".btn").off("click").click(function () {
        var m = clickList.length + 1;
        var clickText = parseInt($(this).text());
        var clickPush = "" + clickText + m;
        clickList.push(clickPush);

        switch (clickText) {
            case 1:
                var redSound = new Audio('./sounds/red.mp3');
                redSound.play();
                animation(red)
                break;

            case 2:
                var greenSound = new Audio('./sounds/green.mp3')
                greenSound.play();
                animation(green)
                break;

            case 3:
                var blueSound = new Audio('./sounds/blue.mp3')
                blueSound.play()
                animation(blue)
                break;

            case 4:
                var yellowSound = new Audio('./sounds/yellow.mp3')
                yellowSound.play()
                animation(yellow);
            default:
                console.log("");
        }
        if (numList.includes(clickPush) && numList.length === clickList.length) {
            nextLevel();
        } else if (!numList.includes(clickPush)) {
            $("h1").text("Game over , press any key to restart")
            var gameOver = new Audio('./sounds/wrong.mp3')
            gameOver.play();
            $("body").addClass("game-over")
            setTimeout(function () {
                $("body").removeClass("game-over");
            }, 600)
            list = [];
            clickList = [];
            numList = [];
            start();
        }
    });
};

function nextLevel() {
    clickList = [];
    num = Math.floor((Math.random() * 4) + 1);
    setTimeout(function () {
        playGame(num)
    }, 600)

}
start();