const express = require('express');
const router = express.Router();

const validatePaymentInput = require('../../validation/paymentValidate');
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
        nic: req.body.nic
    });

    newPayment.save().then(payment => res.json(payment)).catch(err => console.log(err));

});

module.exports = router;