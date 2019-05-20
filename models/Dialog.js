const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DialogSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    phoneno: {
        type: Number,
        required: true
    },
    pin: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = Dialog = mongoose.model('dialog', DialogSchema);