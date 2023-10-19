'use strict';

let numberOfFilms; // global var

function start() { // asks a question and you can answer only with number nad it will be asking you until all of conditions will be False
    numberOfFilms = +prompt("How many films have you already watched ?", '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) { // isNaN checks if it is a number ( not a number gives you a True)
        numberOfFilms = +prompt("How many films have you already watched ?", ''); // this while works until one of those is True, when all of them are False it stops
    }
}

start();

const personalMoveiB = { // main object
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}


function rememberMyFilms() {   // asks you question and you have to answer 'yes', without empty lane and it cant be longer than 50 characters
    for(let i = 0; i < 2; i++) {
        const a = prompt("One of the last watched films ? ", ''),
              b = prompt("How would you rate it ?", '');
    
              if(a != null && b != null && a != ' ' && b != ' ' && a.length < 50 && b.length < 50 ) { // checking if the input from user is not a 'no'(null), not an empty srting and its not longer than 50 letters
                personalMoveiB.movies[a] = b;  // makes object with a rate as a child
                console.log('done');
              } else {
                console.log('error');
                i--; //repeating loop one more time
              }
    }
}

rememberMyFilms();


function detectPersonalLevel() {       // just tells you how much you watch films depending on how many you ve watched
    if(personalMoveiB.count <= 10) {
        console.log('you should watch more movies');
    } else if(personalMoveiB.count >= 11 && personalMoveiB.count <= 20) {
        console.log('you have watched a lot');
    } else if(personalMoveiB.count >= 21) {
        console.log('you ve watched too many movies');
    } else {
        console.log('error!');
    }
}

detectPersonalLevel();

function showMyDB(hiddden) { //checks if it is private or no and logs it depending of status
    if(personalMoveiB.privat === false) {
        console.log(personalMoveiB);
    } else {
        console.log('It is private, sorry !')
    }
}

showMyDB(personalMoveiB.privat);

function writeYourGenres() {  //asks 3 times a question and answer that you answer goes to main data base
    for (let i = 1; i <= 3; i++) {    //loop for asking 3 questions
        personalMoveiB.genres[i - 1] = prompt(`What is your favourite genre ${i}`);    //sends information to database into array
    }
}

writeYourGenres();

