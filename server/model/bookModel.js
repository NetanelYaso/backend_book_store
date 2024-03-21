const mongoose = require("mongoose");

const schema = mongoose.Schema;

const bookSchema = schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishYear: {
        type: Number,
        required: true
    },
},
    { timestamps: true }
)

const BookModel = mongoose.modeldel("book", bookSchema);

module.exports = BookModel;