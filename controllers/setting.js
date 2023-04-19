const UserSettings = require('../models/Setting')

const updateSettings = async (req, res) => {
	const { avatarToggler, instructionMessages, soundFile, screenQuestions, coinEarnings, playLimit, screenUrls, date } = req.body
	console.log(avatarToggler, instructionMessages, soundFile, screenQuestions, coinEarnings, playLimit, screenUrls, date)

	try {
		let settings = await UserSettings.findOne({})

		if (settings) {
			settings.avatarToggler = avatarToggler
			settings.instructionMessages = JSON.parse(instructionMessages)
			settings.soundFile = soundFile
			settings.screenQuestions = JSON.parse(screenQuestions)
			settings.coinEarnings = parseInt(coinEarnings)
			settings.playLimit = parseInt(playLimit)
			settings.screenUrls = JSON.parse(screenUrls)
			settings.date = date
		} else {
			settings = new UserSettings({
				avatarToggler: avatarToggler,
				instructionMessages: JSON.parse(instructionMessages),
				soundFile: soundFile,
				screenQuestions: JSON.parse(screenQuestions),
				coinEarnings: parseInt(coinEarnings),
				playLimit: parseInt(playLimit),
				screenUrls: JSON.parse(screenUrls),
				date: date,
			})
		}

		await settings.save()
		res.status(201).send(settings)
	} catch (err) {
		res.status(400).send(err)
		console.log('error', err)
	}
}

const getSettings = async (req, res) => {
	try {
		const settings = await UserSettings.findOne()
		if (!settings) {
			return res.status(404).send('No settings found!')
		}

		res.status(200).send(settings)
	} catch (err) {
		res.status(500).send(err)
		console.log('error', err)
	}
}

module.exports = {
	getSettings,
	updateSettings,
}
