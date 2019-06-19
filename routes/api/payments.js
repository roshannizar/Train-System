const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const validatePaymentInput = require('../../validation/cardValidate');
const Payment = require('../../models/Payment');

router.get('/test', (req, res) => res.json({ msg: 'Payment Works' }));

// @route POST api/payments/addpayment
// @desc Payment Gateway
// @access private

router.post('/addpayment', (req, res) => {

    const { errors, isValid } = validatePaymentInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newPayment = new Payment({
        cardname: req.body.cardname,
        cardno: req.body.cardno,
        cvcno: req.body.cvcno,
        amount: req.body.amount,
        nic: req.body.nic,
        email: req.body.email
    });

    newPayment.save().then(payment => res.json(payment)).catch(err => console.log(err));

    var output = `<p>Train Bookings</p>
                <label>Dear Sir/Madam, we received your payment and your payment was successful.</label>
                `;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        port: 25,
        auth: {
            user: 'trainbooking096@gmail.com',
            pass: 'tanki_online123'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: '"Train Booking" <roshannizar8@gmail.com>',
        to: req.body.email,
        subject: 'Payment Confirmation',
        text: 'Payment was successfully '+req.body.amount,
        htlm: output
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });

});

router.post('/mobile', (req, res) => {

    const newDialogMobile = new DialogMobile({
        name: req.body.name,
        phoneno: req.body.phoneno,
        pin: req.body.pin,
        email: req.body.email
    });

    newDialogMobile.save().then(mobile => res.json(mobile)).catch(err => console.log(err));

    var output = `<p>Train Bookings</p>
    <label>Dear Sir/Madam, we received your payment and your payment was successful.</label>
    `;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        port: 25,
        auth: {
            user: 'trainbooking096@gmail.com',
            pass: 'tanki_online123'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: '"Train Booking" <roshannizar8@gmail.com>',
        to: req.body.email,
        subject: 'Payment Confirmation',
        text: 'Payment was successfully ${req.body.amount}',
        html: output
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });

});

module.exports = router;