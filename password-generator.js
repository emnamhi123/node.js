const generator = require("generate-password");

let password = generator.generate({
  length: 10,
  numbers: true,
  symbols: true,
  uppercase: true,
  excludeSimilarCharacters: true,
});

console.log(password);