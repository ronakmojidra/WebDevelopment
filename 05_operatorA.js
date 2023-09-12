function squareOfWordLength(str) {
let str1 = str.length;
console.log(`The length of the string is: ${str1}`);
let sqr = str1 *str1;
console.log(`The square of the string is: ${sqr}`);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");
console.log(' ');

let str2 = function(){
         let givenStr = "I am Angular Developer";
         console.log(`The given string is: ${givenStr}`);
        let strLength =  givenStr.length;
        console.log(`The length of string is: ${strLength}`);
        let words = givenStr.split(' ');
       
        console.log(`The splitted string is: ${words}`);
        let wordsLength = words.length;
        console.log(`Total words in string is: ${wordsLength}`);
        let result = strLength/wordsLength;
        console.log(`Divided string is: ${result}`);
        let mul = strLength * wordsLength;
        console.log(`After multiply the string is: ${mul}`);
        

}
str2();