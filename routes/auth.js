const express = require('express')
const router = express.Router()
const { register, login } = require('../controllers/auth')

// @route   POST api/auth/register
// @desc    Register a user
// @access  Public
router.post('/signup', register)

// @route   POST api/auth/login
// @desc    Login a user
router.post('/login', login)

module.exports = router
