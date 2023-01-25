const path = require("path");

// Name of the current file
console.log(path.basename(__filename));

// Name of the current directory
console.log(path.dirname(__filename));

// Extension of a file
console.log(path.extname(__filename));

// Creating a path object
console.log(path.parse(__filename));

// Join file paths
console.log(path.join(__dirname, "test", "testFile.html"));
