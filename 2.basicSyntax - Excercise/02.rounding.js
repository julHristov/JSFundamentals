function test(num, prec) {
  let ourNum = num;
  let precision = prec;

  if (precision > 15) {
    precision = 15;
  }
  ourNum = num.toFixed(precision);
  console.log(parseFloat(ourNum));
}
test(10.5, 3);

// function rounding(num, prec) {
//   if (prec > 15) {
//     prec = 15;
//   }
//   return num.toFixed(prec);
// }
// const result = rounding(10.5, 3);
// console.log(parseFloat(result));

// const result1 = function (num, prec) {
//   if (prec > 15) {
//     prec = 15;
//   }
//   return num.toFixed(prec);
// };
// const res1 = result1(10.5, 3);
// console.log(parseFloat(res1));

// const result2 = (num, prec) => (prec > 15 ? (prec = 15) : (prec = prec));
// num = num.toFixed(prec);
// const res2 = result2(10.5, 3);
// console.log(parseFloat(res2));
