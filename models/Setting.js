const mongoose = require('mongoose')

const SettingScheme = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},

	avatarToggler: {
		type: Boolean,
		required: true,
		default: false,
	},

	instructionMessages: [
		{
			id: { type: String },
			text: { type: String },
		},
	],

	soundFile: {
		type: String || null,
	},

	screenQuestions: [
		{
			question: { type: String },
			optionA: { type: String },
			optionB: { type: String },
		},
	],

	coinEarnings: {
		type: Number,
		required: true,
	},
	playLimit: {
		type: Number,
		required: true,
	},
})

module.exports = mongoose.model('setting', SettingScheme)
