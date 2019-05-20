const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateBookingInput(data) {

    let errors = {};

    data.trainid = !isEmpty(data.trainid) ? data.trainid : '';
    data.price = !isEmpty(data.price) ? data.price : '';
    data.quantity = !isEmpty(data.quantity) ? data.quantity : '';

    if (!Validator.isAlphanumeric(data.trainid)) {
        errors.trainid = 'Train id is invalid';
    }

    if (Validator.isEmpty(data.trainid)) {
        errors.trainid = 'Train id is required';
    }

    if (!Validator.isNumeric(data.price)) {
        errors.price = 'Price is invalid';
    }

    if (Validator.isEmpty(data.price)) {
        errors.price = 'Price is required';
    }

    if (!Validator.isNumeric(data.quantity)) {
        errors.quantity = 'Quantity is invalid';
    }

    if (Validator.isEmpty(data.quantity)) {
        errors.quantity = 'Quantity is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};