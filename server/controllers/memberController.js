const asyncHandler = require('express-async-handler');

const Member = require('../models/memberModel');

// @desc    Get Members
// @route   GET  /api/members
// @access  Private
const getMembers = asyncHandler(async (req, res) => {
    const members = await Member.find()

    res.status(200).json(members)
});

// @desc    Create Members
// @route   POST  /api/members
// @access  Private
const createMember = asyncHandler(async (req, res) => {
    console.log("req.body.text " + req.body.text);
    
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add text to the field')
    };

    const member = await Member.create({
        text: req.body.text
    })

    res.status(200).json(member)
});

// @desc    Update Members
// @route   PUT  /api/members/:id
// @access  Private
const updateMember = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `update member ${req.params.id}` })
});

// @desc    Delete Member
// @route   DELETE  /api/members/:id
// @access  Private
const deleteMember = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete member ${req.params.id}` })
});

module.exports = {
    getMembers,
    createMember,
    updateMember,
    deleteMember
}