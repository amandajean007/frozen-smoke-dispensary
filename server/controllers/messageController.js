const asyncHandler = require('express-async-handler');

const Message = require('../models/messageModel');

// @desc    Get Messages
// @route   GET  /api/messages
// @access  Private
const getMessages = asyncHandler(async (req, res) => {
    const messages = await Message.find()

    res.status(200).json(messages);
});

// @desc    Create Messages
// @route   POST  /api/messages
// @access  Private
const createMessage = asyncHandler(async (req, res) => {
    if(!req.body.name) {
        res.status(400)
        throw new Error('Please add text to the field')
    };
    
    const message = await Message.create({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })

    res.status(200).json(message)
    console.log(message);
});

// @desc    Update Messages
// @route   PUT  /api/messages/:id
// @access  Private
const updateMessage = asyncHandler(async (req, res) => {
    const message = await Message.findById(req.params.id)

    if(!message) {
        res.status(400)
        throw new Error('Message not found')
    }

    const updateMessage = await Message.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updateMessage)
});

// @desc    Delete Message
// @route   DELETE  /api/messages/:id
// @access  Private
const deleteMessage = asyncHandler(async (req, res) => {
    const message = await Message.findById(req.params.id)

    if(!message) {
        res.status(400)
        throw new Error('Message not found')
    }

    await message.remove()
    
    res.status(200).json({ id: req.params.id })
});

module.exports = {
    getMessages,
    createMessage,
    updateMessage,
    deleteMessage
}