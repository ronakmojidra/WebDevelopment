var triangleType = function (side1, side2, side3) {
  if (
    side1 <= 0 ||
    side2 <= 0 ||
    side3 <= 0 ||
    isNaN(side1, side2, side3) ||
    side1 == "" ||
    side2 == "" ||
    side3 == ""
  ) {
    console.log(`${side1} ${side2} ${side3}: Invalid Data`);
  } else if (side1 === side2 && side1 === side3) {
    console.log(`${side1} ${side2} ${side3}: Equilateral triangle`);
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    console.log(`${side1} ${side2} ${side3}: Isosceles triangle`);
  } else {
    console.log(`${side1} ${side2} ${side3}: Scalene triangle`);
  }
};
triangleType(45, 45, 45);
triangleType(45, 90, 45);
triangleType(30, 45, 90);
triangleType(-45, -25, -56);
triangleType("twenty", "sixty", "ninety");
triangleType(null, null, null);
triangleType(undefined, undefined, undefined);
triangleType(null, 45, 92);
