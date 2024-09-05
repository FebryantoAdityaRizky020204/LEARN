/**
 * TODO : Menginstall NPM
 * ? kali ini akan menginstall packages untuk memberikan jokes
 * ? install di cli folder ./learn-install menggunakan perintah
 * ! [npm i give-me-a-joke]
 * 
 * ? untuk perintahnya silahkan baca disini
 * ! [https://www.npmjs.com/package/give-me-a-joke]
 * 
 * ! [npm i chalk-rainbow]
 */


var giveMeAJoke = require('give-me-a-joke');
var chalkRainbow = require('chalk-rainbow')
const cowsay = require("cowsay");

// To get a random dad joke
giveMeAJoke.getRandomDadJoke (function(joke) {
    console.log(chalkRainbow(joke));
});


// chalkRainbow('Awesome rainbow string!')
 
// ? GLOBAL PACKAGES [npm install -g cowsay] [cowsay hello wordl]
// ! TEST cowsay di project
// ! Sebelum digunakan jalankan [npm link cowsay] di folder ini agar cowsay terdaftar
console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));


