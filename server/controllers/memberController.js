const asyncHandler = require('express-async-handler');

// @desc    Get Members
// @route   GET  /api/members
// @access  Private
const getMembers = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get Members' })
});

// @desc    Create Members
// @route   POST  /api/members
// @access  Private
const createMember = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    };
    res.status(200).json({ message: 'Create Member' })
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