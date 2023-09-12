let interviewEligibility = function (gradScore, hscScore, sscScore, candidateName) {
         let eligible = gradScore>=70 || hscScore>= 80|| sscScore>= 90 ? "You are eligible for TCS interview" : "You are not eligible for TCS interview";
         console.log(`${candidateName} You are: ${eligible}`);
}
interviewEligibility(80,86,90,"Aditya");
interviewEligibility(70,65,55,"Gaurav");
interviewEligibility(60,79,88,"Adarsh");


var fullName = "Hello";
var myNumber = +fullName;
console.log(myNumber);
 

let result;

result = Number('Hello')
console.log(result);

var x = "100";
console.log(typeof x);

var y =+x;
console.log(typeof y);
console.log(y);