const express = require('express')
const router = express.Router()

const { getSettings, updateSettings } = require('../controllers/setting')

router.post('/settings', updateSettings)

router.get('/settings', getSettings)

module.exports = router
