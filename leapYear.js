var checkLeapYear = function(year){
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a leap year`);
    } else {
        console.log(`${year} is not a leap year`);
    }
}
checkLeapYear(2100);
checkLeapYear(2024);
checkLeapYear(2021);
checkLeapYear(2040);