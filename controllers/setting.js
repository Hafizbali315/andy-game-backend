const UserSettings = require('../models/Setting')

const updateSettings = async (req, res) => {
	const userId = req.body.userId
	try {
		let settings = await UserSettings.findOne({ userId })

		console.log(req.file)

		if (settings) {
			;(settings.avatarToggler = req.body.avatarToggler || false),
				(settings.instructionMessages = JSON.parse(req.body.instructionMessages) || []),
				(settings.soundFile = req.file.filename || null),
				(settings.screenQuestions = JSON.parse(req.body.screenQuestions) || []),
				(settings.coinEarnings = parseInt(req.body.coinEarnings) || 0),
				(settings.playLimit = parseInt(req.body.gamePlays) || 0)

			await settings.save()
			res.json(settings)
		} else {
			const settings = new UserSettings({
				userId: userId,
				avatarToggler: req.body.avatarToggler || false,
				instructionMessages: JSON.parse(req.body.instructionMessages) || [],
				soundFile: req.file.filename || null,
				screenQuestions: JSON.parse(req.body.screenQuestions) || [],
				coinEarnings: parseInt(req.body.coinEarnings) || 0,
				playLimit: parseInt(req.body.gamePlays) || 0,
			})
			await settings.save()
			res.status(201).send(settings)
		}
	} catch (err) {
		res.status(400).send(err)
		console.log('error', err)
	}
}

const getSettings = async (req, res) => {
	try {
		const settings = await UserSettings.findOne(req.body.userId)
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
