const asyncHandler = require('express-async-handler');

const Member = require('../models/memberModel');

// @desc    Get Members
// @route   GET  /api/members
// @access  Private
const getMembers = asyncHandler(async (req, res) => {
    const members = await Member.find()

    res.status(200).json(members);
});

// @desc    Create Members
// @route   POST  /api/members
// @access  Private
const createMember = asyncHandler(async (req, res) => {
    console.log(req.body);
    if(!req.body.name) {
        res.status(400)
        throw new Error('Please add text to the field')
    };
    
    const member = await Member.create({
        name: req.body.name,
        dob: req.body.dob,
        email: req.body.email,
        phone: req.body.phone
    })

    res.status(200).json(member)
    console.log(member);
});

// @desc    Update Members
// @route   PUT  /api/members/:id
// @access  Private
const updateMember = asyncHandler(async (req, res) => {
    const member = await Member.findById(req.params.id)

    if(!member) {
        res.status(400)
        throw new Error('Member not found')
    }

    const updateMember = await Member.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updateMember)
});

// @desc    Delete Member
// @route   DELETE  /api/members/:id
// @access  Private
const deleteMember = asyncHandler(async (req, res) => {
    const member = await Member.findById(req.params.id)

    if(!member) {
        res.status(400)
        throw new Error('Member not found')
    }

    await member.remove()
    
    res.status(200).json({ id: req.params.id })
});

module.exports = {
    getMembers,
    createMember,
    updateMember,
    deleteMember
}