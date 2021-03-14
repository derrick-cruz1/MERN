const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: String,
	punchLine: Number
});

const User = mongoose.model("joke", JokeSchema);

module.exports = User;