// function login(input) {
//   let index = 0;
//   let pass = input[index++];
//   let command = input[index];
//   while (command !== pass) {
//     console.log("Incorrect password. Try again.");
//     index++;
//     command = input[index];
//   }
//   console.log(`User ${pass} logged in.`);
// }
// login(["Acer", "login", "go", "let me in", "recA"]);
function reverseString(str) {
  return str.split("").reverseString().join("");
}
console.log(reverseString("hello"));
