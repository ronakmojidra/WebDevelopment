function prime(num) {
  let chk = 0;
  for (let index = 2; index < num; index++) {
    if (num % 2 == 0) {
      {
        chk++;
        break;
      }
    }
  }
  if (chk == 0) {
    console.log(`${num} is a prime number`);
  } else {
    console.log(`${num} is not a prime number`);
  }
}
prime(11);
prime(4);
prime(21);
