'use strict';

const personalMoveiB = { // main object
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() { // asks a question and you can answer only with number nad it will be asking you until all of conditions will be False
        personalMoveiB.count = +prompt("How many films have you already watched ?", '');
        
        while(personalMoveiB.count == '' || personalMoveiB.count == null || isNaN(personalMoveiB.count)) { // isNaN checks if it is a number ( not a number gives you a True)
            personalMoveiB.count = +prompt("How many films have you already watched ?", ''); // this while works until one of those is True, when all of them are False it stops
        }
    },
    rememberMyFilms: function() {   // asks you question and you have to answer 'yes', without empty lane and it cant be longer than 50 characters
        for(let i = 0; i < 2; i++) {
            const a = prompt("One of the last watched films ? ", '').trim(),
                  b = prompt("How would you rate it ?", '').trim();
        
                  if(a != null && b != null && a != ' ' && b != ' ' && a.length < 50 && b.length < 50 ) { // checking if the input from user is not a 'no'(null), not an empty srting and its not longer than 50 letters
                    personalMoveiB.movies[a] = b;  // makes object with a rate as a child
                    console.log('done');
                  } else {
                    console.log('error');
                    i--; //repeating loop one more time
                  }
        }
    },
    detectPersonalLevel: function() {       // just tells you how much you watch films depending on how many you ve watched
        if(personalMoveiB.count <= 10) {
            console.log('you should watch more movies');
        } else if(personalMoveiB.count >= 11 && personalMoveiB.count <= 20) {
            console.log('you have watched a lot');
        } else if(personalMoveiB.count >= 21) {
            console.log('you ve watched too many movies');
        } else {
            console.log('error!');
        }
    },
    showMyDB: function(hidden) { //checks if it is private or no and logs it depending of status
        if(!hidden) {
            console.log(personalMoveiB);
        } else {
            console.log('It is private, sorry !')
        }
    },
    writeYourGenres: function() {  //asks 3 times a question and answer that you answer goes to main data base
        for (let i = 1; i <= 3; i++) { //loop for asking 3 questions
            let genre = prompt(`What is your favourite genre ${i}`); //asks questions and put it into this var
            if(personalMoveiB.genres[i] === null || personalMoveiB.genres[i] === '') {
                i--; // return one cycle
            } else {
                personalMoveiB.genres[i - 1] = genre; //sends information to database into array
            }
        }
        personalMoveiB.genres.forEach((item, i) => { // arrow function where item is parameter(genre) in array and i - is a number in array  (0 1 2)
            console.log(`Favourite genre ${i + 1} - is ${item}`); // i + 1 because it is an array and it starts from 0
        });
    },
    toggleVisibleMyDB: function() { // toggler that changes privicy when you call it
        if(personalMoveiB.privat) { //if it is true it changes it to false
            personalMoveiB.privat = false;
        } else {
            personalMoveiB.privat = true; // opposite
        }
    }
};




