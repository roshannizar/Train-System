const express = require('express');
const router = express.Router();

const validateTrainInput = require('../../validation/trainValidate');
const Train = require('../../models/Train');

router.get('/test', (req, res) => res.json({ msg: 'Train works' }));

// @route GET api/train/get

router.get('/gettrain', (req, res) => {
    Train.find().sort({ date: -1 }).then(train => res.json(train)).catch(err => res.status(404).json({ msg: 'No Trains Found' }));
});


router.post('/addtrain', (req, res) => {

    const { errors, isValid } = validateTrainInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    Train.findOne({ trainid: req.body.trainid }).then(train => {

        if (train) {
            return res.status(400).json('Already in use');
        }
        else {
            const newTrain = new Train({
                trainid: req.body.trainid,
                trainname: req.body.trainname,
                price: req.body.price,
                destination: req.body.destination,
                status: req.body.status
            });

            newTrain.save().then(train => res.json(train)).catch(err => console.log(err));
        }
    });
});

module.exports = router;