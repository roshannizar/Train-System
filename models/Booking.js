const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({

    trainid: {
        type: String,
        required: true
    },
    bookingid: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Booking = mongoose.model('bookings', BookingSchema);