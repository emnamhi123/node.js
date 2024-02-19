const fs = require("fs");

fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File created successfully");
  }
});
fs.readFile("hello.txt", "utf8", (err, data) => {
    if (err) {
      console.log("Error is", err);
    } else {
      console.log("Content data", data);
    }
  });