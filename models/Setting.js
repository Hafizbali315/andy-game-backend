const mongoose = require('mongoose')

const SettingScheme = new mongoose.Schema({
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
		type: String,
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
