const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(201).json({ message: 'get members' })
})

router.post('/', (req, res) => {
    res.status(200).json({ message: 'create members' })
})

router.put('/:id', (req, res) => {
    res.status(200).json({ message: `update member ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `delete member ${req.params.id}` })
})

module.exports = router;