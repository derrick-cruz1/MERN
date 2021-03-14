const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Jokes_DB", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the Jokes_database"))
	.catch(err => console.log("Uh oh, something went wrong when connecting to the database", err));