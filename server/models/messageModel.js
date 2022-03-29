const mongoose = require('mongoose')

const messageSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add your name']
        },
        email: {
            type: String,
            required: [true, 'Please add your e-mail'],
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address']
        },
        message: {
            type: String,
            required: [true, 'Please add a message']
        }
    },
);

module.exports = mongoose.model('Message', messageSchema);