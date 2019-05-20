const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrainSchema = new Schema({

    trainid: {
        type: String
    },
    trainname: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    destination: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }

});

module.exports = Train = mongoose.model('trains', TrainSchema);