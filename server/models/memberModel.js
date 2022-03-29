const mongoose = require('mongoose')

const memberSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add your name']
        },
        dob: {
            type: Number,
            required: [true, 'Please add your date of birth'],
            // match: [must be 21]
        },
        email: {
            type: String,
            required: [true, 'Please add your e-mail'],
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address']
        },
        phone: {
            type: Number,
            required: [true, 'Please add your phone number']
        }
    },
);

module.exports = mongoose.model('Member', memberSchema);