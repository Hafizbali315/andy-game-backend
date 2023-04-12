const mongoose = require('mongoose')

const ShopItemScheme = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	iconUrl: {
		type: String,
		required: true,
	},
	iconPubId: {
		required: true,
		type: String,
	},
})

module.exports = mongoose.model('shopItem', ShopItemScheme)
