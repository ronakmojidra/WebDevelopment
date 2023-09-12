let greatest = function(num1,num2){
           var num3=  num1 > num2 ? num1 : num2;
           console.log(`The greatest number between ${num1} and ${num2} is ${num3}`);
}
greatest(10,-10);
greatest(800,899);

console.log(" ");

let isEvenOrOdd = function(num){
           let result = num % 2 == 0? "Even" : "odd";
           console.log(`The num is ${result}`);
}
isEvenOrOdd(29);
isEvenOrOdd(44);
isEvenOrOdd(0);
isEvenOrOdd(101);

console.log(" ");

let wordLength = function(str){
                  let str1 = str.length;
                 
                    let str2 = str1 % 2 == 0 ? "Even" : "Odd";
                    console.log(`the length of the given string is :${str1} and the string is: ${str2}`);
}
wordLength("JavaScript");
wordLength("developer");
wordLength("Google");