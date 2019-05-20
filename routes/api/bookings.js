const express = require('express');
const router = express.Router();

const validateBookingInput = require('../../validation/reserve');
const Booking = require('../../models/Booking');

router.get('/test', (req, res) => res.json({ msg: 'Booking works' }));

router.get('/getbooking', (req, res) => {
    Booking.find().sort({ date: -1 }).then(booking => res.json(booking)).catch(err => res.status(404).json({ msg: 'No Bookings Found' }));
});


router.post('/reserve', (req, res) => {

    const { errors, isValid } = validateBookingInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }


    const newBooking = new Booking({
        trainid: req.body.trainid,
        price: req.body.price,
        quantity: req.body.quantity
    });

    newBooking.save().then(booking => res.json(booking)).catch(err => console.log(err));
})

module.exports = router;