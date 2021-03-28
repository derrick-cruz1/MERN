const mongoose = require('mongoose');

const TeamManagerSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: [true, "You must have a player name"],
        minlength: [ 3, "Your player name must be at least two characters long"],
    },
    preferredPosition: {
        type: String,
        minlength: [ 3, "Your position should have more than three characters"],
    },
    gameOne: {
        type: String,
        required: [true, "You must make a decision!"],
        enum: ["Playing", "Not Playing", "Undecided"]
    },
    gameTwo: {
        type: String,
        required: [true, "You must make a decision!"],
        enum: ["Playing", "Not Playing", "Undecided"]
    },
    gameThree: {
        type: String,
        required: [true, "You must make a decision!"],
        enum: ["Playing", "Not Playing", "Undecided"]
    },
},
{timestamps: true});

module.exports = mongoose.model("TeamManager", TeamManagerSchema);