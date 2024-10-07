const mongoose = require("mongoose");

const questionsSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: []
})

const Questions = mongoose.model("questions", questionsSchema);

module.exports = Questions;