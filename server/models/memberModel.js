const mongoose = require('mongoose')

const memberSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add your name']
        },
        dob: {
            type: String,
            required: [true],
            // match: [must be 21]
        },
        email: {
            type: String,
            required: [true],
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address']
        },
        phone: {
            type: String,
            required: [true]
        }
    },
);

module.exports = mongoose.model('Member', memberSchema);