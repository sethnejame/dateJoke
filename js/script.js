
// random list of bad jokes, courtesy of Seth
let jokeArray = ["Why was the the duck arrested?  \n Because he was caught selling quack!",
                "What do you call a fish with two knees? \n A two-knee-fish!",
                "What do you call a chimpanzee who works with pottery?  \n Harry Potter!",
                "What do you call it when Batman skips church?  \n Christian Bale!",
                "Why don't they play poker in the jungle?  \n There's too many cheetahs!",
                "What did the mallard say to the bartender?  \n Just put it on my bill!"
                ];

// get current date with Date object
let today = new Date();

function tellJoke() {
    // use Math.random, mult by the length of the jokeArray, use that position in jokeArray index for rando joke
    let randomJoke = jokeArray[Math.floor(Math.random()*jokeArray.length)]
    // grab inner html of output div, replace with joke
    document.getElementById("output").innerHTML = (randomJoke)
};

function giveDate() {
    // grab inner html of output div, replace with joke
    document.getElementById("output").innerHTML = (today.toDateString())
};
