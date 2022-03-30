const mongoose = require('mongoose')

const messageSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add your name'],
            unique: false
        },
        email: {
            type: String,
            required: [true, 'Please add your e-mail'],
            match: [/.+@.+\..+/, 'Must use a valid email address'],
            unique: false
        },
        message: {
            type: String,
            required: [true, 'Please add a message'],
            unique: false
        }
    },
);

module.exports = mongoose.model('Message', messageSchema);