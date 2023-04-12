const express = require('express')
const router = express.Router()

const { getSettings, updateSettings } = require('../controllers/setting')

router.post('/user-settings', updateSettings)

router.post('/user-settings/:userId', getSettings)

module.exports = router
