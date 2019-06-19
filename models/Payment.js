const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({

    cardname: {
        type: String,
        required: true
    },
    cardno: {
        type: String,
        required: true
    },
    cvcno: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    email: {
        type:String,
        required:true
    }
});

module.exports = Payment = mongoose.model('payments', PaymentSchema);