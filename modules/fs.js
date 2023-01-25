const fs = require("fs");
const path = require("path");

// Creating a folder
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
// 	if (error) return console.log("mkdir error", error);

// 	console.log("Folder created successfully!");
// });

// Creating a file
fs.writeFile(
	path.join(__dirname, "/test", "testFile.txt"),
	"Hello Node JS",
	(error) => {
		if (error) return console.log("mkdir error", error);

		console.log("File created successfully!");

		// Adding more content to an existing file
		fs.appendFile(
			path.join(__dirname, "/test", "testFile.txt"),
			" Hello world!",
			(error) => {
				if (error) return console.log("mkdir error", error);

				console.log("Content added successfully!");
			}
		);

		// Reading content of a file
		fs.readFile(
			path.join(__dirname, "/test", "testFile.txt"),
			"utf8",
			(error, data) => {
				if (error) return console.log("mkdir error", error);

				console.log("Content: ", data);
			}
		);
	}
);
