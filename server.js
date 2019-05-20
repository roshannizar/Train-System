const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const trains = require('./routes/api/trains');
const bookings = require('./routes/api/bookings');
const payments = require('./routes/api/payments');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose.connect(db, {
    useNewUrlParser: true
}).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));

app.use('/api/trains', trains);
app.use('/api/bookings', bookings);
app.use('/api/payments', payments);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));