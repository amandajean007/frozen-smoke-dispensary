// @desc    Get Members
// @route   GET  /api/members
// @access  Private
const getMembers = (req, res) => {
    res.status(200).json({ message: 'Get Members' })
}

// @desc    Create Members
// @route   POST  /api/members
// @access  Private
const createMember = (req, res) => {
    res.status(200).json({ message: 'Create Member' })
}

// @desc    Update Members
// @route   PUT  /api/members/:id
// @access  Private
const updateMember = (req, res) => {
    res.status(200).json({ message: `update member ${req.params.id}` })
}

// @desc    Delete Member
// @route   DELETE  /api/members/:id
// @access  Private
const deleteMember = (req, res) => {
    res.status(200).json({ message: `delete member ${req.params.id}` })
}

module.exports = {
    getMembers,
    createMember,
    updateMember,
    deleteMember
}