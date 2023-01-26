// const { Person } = require("./person");
const dotenv = require("dotenv");
const connectToDB = require("./src/database/connect");

dotenv.config();

connectToDB();

// require("./modules/path");
// require("./modules/fs");

// require("./modules/http");

require("./modules/express");

// const person = new Person("João Antonio");
