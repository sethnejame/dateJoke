
// random list of bad jokes, courtesy of Seth
let jokeArray = ["Why was the the duck arrested?  <br><br> <b>Because he was caught selling quack!",
                "What do you call a fish with two knees? <br><br> <b>A two-knee-fish!",
                "What do you call a chimpanzee who works with pottery?  <br><br> <b>Harry Potter!",
                "What do you call it when Batman skips church?  <br><br> <b>Christian Bale!",
                "Why don't they play poker in the jungle?  <br><br> <b>There's too many cheetahs!",
                "What did the mallard say to the bartender?  <br><br> <b>Just put it on my bill!"
                ];

// get current date with Date object
let today = new Date();



document.getElementById("joke").addEventListener("click", function () { 
    // use Math.random, mult by the length of the jokeArray, use that position in jokeArray index for rando joke
    let randomJoke = jokeArray[Math.floor(Math.random()*jokeArray.length)]
    // grab inner html of output div, replace with joke
    document.getElementById("output").innerHTML = (randomJoke)
});

document.getElementById("date").addEventListener("click", function (){
        // grab inner html of output div, replace with joke
        document.getElementById("output").innerHTML = (today.toDateString())
});

