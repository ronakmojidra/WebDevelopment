function maleMarriageEligibility(gender,age,boyName) {
    gender == "Male" && age>= 21 ? console.log(`Hey ${boyName} You are eligible for marriage`) : console.log(`Hey ${boyName} you are not eligible for marriage` );
}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stew Jobs");

