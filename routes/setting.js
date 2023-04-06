const express = require('express')
const multer = require('multer')
const router = express.Router()
const { Readable } = require('stream')

// Multer storage and upload middleware
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/')
	},
	filename: function (req, file, cb) {
		cb(null, `${Date.now()}-${file.originalname}`)
	},
})

const upload = multer({ storage: storage })

const { getSettings, updateSettings } = require('../controllers/setting')

router.post('/user-settings', upload.single('audioFile'), updateSettings)

router.post('/user-settings/:userId', getSettings)

module.exports = router
