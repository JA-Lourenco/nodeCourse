const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectToDB = async () => {
	await mongoose.connect(
		`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nodecourse.mc9kime.mongodb.net/database?retryWrites=true&w=majority`,
		(error) => {
			if (error) return console.log("Mongoose Connect Error: ", error);

			return console.log("Connected to Database!");
		}
	);
};

module.exports = connectToDB;
