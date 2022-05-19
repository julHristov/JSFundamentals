function trangle(num) {
  for (let i = 1; i <= num; i++) {
    let output = "";
    for (let j = 1; j <= i; j++) {
      output += `${i} `;
    }
    console.log(output);
  }
}
trangle(3);

const solve = (number) => {
  for (let a = 1; a <= number; a++) {
    let printLine = "";
    for (let b = 1; b <= a; b++) {
      printLine += b + " ";
    }
    console.log(printLine);
  }
};
solve(3);
