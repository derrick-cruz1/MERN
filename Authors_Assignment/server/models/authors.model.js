const mongoose = require('mongoose');

const AuthorsSchema = new mongoose.Schema({
    Author: {
        type: String,
        required: [true, "You must have an author name"],
        minlength: [ 3, "Your author name must be at least three characters long"],
    },
},
{timestamps: true});

module.exports = mongoose.model("Authors", AuthorsSchema);