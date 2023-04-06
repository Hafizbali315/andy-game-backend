const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

const User = require('../models/user')

dotenv.config()

const createToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: 3600,
	})
}

// @route   POST api/auth/register
// @desc    Register a user
// @access  Public
const register = async (req, res) => {
	const { name, email, password } = req.body

	try {
		let user = await User.findOne({ email })

		if (user) {
			return res.status(400).json({ msg: 'User already exists' })
		}

		user = new User({
			name,
			email,
			password,
		})

		const salt = await bcrypt.genSalt(10)

		user.password = await bcrypt.hash(password, salt)

		await user.save()

		const token = createToken(user.id)

		res.json({
			token,
			user: {
				id: user.id,
				name: user.name,
				email: user.email,
			},
		})
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Server error')
	}
}

// @route   POST api/auth/login
// @desc    Login a user
// @access  Public
const login = async (req, res) => {
	const { email, password } = req.body

	try {
		const user = await User.findOne({ email })

		if (!user) {
			return res.status(400).json({ msg: 'Invalid credentials' })
		}

		const isMatch = await bcrypt.compare(password, user.password)

		if (!isMatch) {
			return res.status(400).json({ msg: 'Invalid credentials' })
		}

		const token = createToken(user.id)

		res.json({
			token,
			user: {
				id: user.id,
				name: user.name,
				email: user.email,
			},
		})
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Server error')
	}
}

module.exports = {
	register,
	login,
}
