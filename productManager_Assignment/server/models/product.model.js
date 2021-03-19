const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "You must have a title for a product manager"],
        minlength: [ 3, "Your Product title must be at least three characters long"],
    },
    price: {
        type: Number,
        required: [true, "You must have a price for a product manager"],
        min: [ 1, "Your Product manager must be at least more than a $1"],
    },
    description: {
        type: String,
        minlength: [ 3, "Your Product manager description must be at least three characters long"],
    },
},
{timestamps: true});

module.exports = mongoose.model("Product", ProductSchema);