const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateTrainInput(data) {

    let errors = {};

    data.trainid = !isEmpty(data.trainid) ? data.trainid : '';
    data.trainname = !isEmpty(data.trainname) ? data.trainname : '';
    data.price = !isEmpty(data.price) ? data.price : '';
    data.destination = !isEmpty(data.destination) ? data.destination : '';

    if (!Validator.isAlphanumeric(data.trainid)) {
        errors.trainid = 'Train id is invalid';
    }

    if (Validator.isEmpty(data.trainid)) {
        errors.trainid = 'Train id is required';
    }

    if (!Validator.isAlphanumeric(data.trainname)) {
        errors.trainname = 'Train name is invalid';
    }

    if (Validator.isEmpty(data.trainname)) {
        errors.trainname = 'Train name is required';
    }

    if (!Validator.isAlphanumeric(data.destination)) {
        errors.destination = 'Destination is invalid';
    }

    if (Validator.isEmpty(data.destination)) {
        errors.destination = 'Destination is required';
    }

    if (!Validator.isNumeric(data.price)) {
        errors.price = 'Price is invalid';
    }

    if (Validator.isEmpty(data.price)) {
        errors.price = 'Price is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};