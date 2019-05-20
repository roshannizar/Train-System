const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePaymentInput(data) {

    let errors = {};

    data.cardname = !isEmpty(data.cardname) ? data.cardname : '';
    data.cardno = !isEmpty(data.cardno) ? data.cardno : '';
    data.cvcno = !isEmpty(data.cvcno) ? data.cvcno : '';
    data.amount = !isEmpty(data.amount) ? data.amount : '';

    if (!Validator.isAlphanumeric(data.cardname)) {
        errors.cardname = 'Card Name is invalid';
    }

    if (Validator.isEmpty(data.cardname)) {
        errors.cardname = 'Card Name is required';
    }

    if (!Validator.isAlphanumeric(data.cardno)) {
        errors.cardno = 'Card No is invalid';
    }

    if (Validator.isEmpty(data.cardno)) {
        errors.cardno = 'Card No is required';
    }

    if (!Validator.isAlphanumeric(data.cvcno)) {
        errors.cvcno = 'CVC No is invalid';
    }

    if (Validator.isEmpty(data.cvcno)) {
        errors.cvcno = 'CVC No is required';
    }

    if (!Validator.isNumeric(data.amount)) {
        errors.amount = 'Amount is invalid';
    }

    if (Validator.isEmpty(data.amount)) {
        errors.amount = 'Amount is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};