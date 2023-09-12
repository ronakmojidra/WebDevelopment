function reverseString(str) {
    let result = "";
    for (let index = str.length- 1; index >= 0; index--) {
        const char = str.charAt(index);
result = result.concat(char);
     }
     console.log(` The reverse of string is: ${result}`);
}
reverseString("Hard work always pays back");
reverseString("Soon i will be angular IT champ");

console.log(`-----------------------------------------------`);

console.log(`1>----------------------------------------`);
function vowelsCount(str) {
    let count = 0;
    let result = " ";
    for (let index = 0; index < str.length; index++) {
      let char = str.charAt(index);
      if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u" || char == "A" || char == "E" || char == "I" || char == "O" || char == "U") {
        result = result.concat(char,",");
        count++;
      }
        
    }
    console.log(`Vowels are: ${result}`);
    console.log(`The total number vowels are: ${count}`);
}
vowelsCount("I am very good IT Developer");