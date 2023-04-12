const ShopItem = require('../models/ShopItem')

const postShopItems = async (req, res) => {
	const { name, price, description, category, iconUrl, iconPubId } = req.body
	try {
		const shopItem = new ShopItem({
			name,
			description,
			price: parseInt(price),
			category,
			iconUrl,
			iconPubId,
		})

		await shopItem.save()
		res.status(201).send({ shopItem })
	} catch (error) {
		console.log(error)
	}
}

const getShopItems = async (req, res) => {
	try {
		const shopItems = await ShopItem.find({})
		res.status(200).send(shopItems)
	} catch (error) {
		console.log(error)
	}
}

const updateShopItem = async (req, res) => {
	const { name, price, description, category, iconUrl, iconPubId } = req.body
	try {
		const shopItem = await ShopItem.findByIdAndUpdate(req.params.id, {
			name,
			description,
			price: parseInt(price),
			category,
			iconUrl,
			iconPubId,
		})
		res.send(shopItem)
	} catch (err) {
		res.status(500).send(err)
		console.log(err)
	}
}

const deleteShopItem = async (req, res) => {
	try {
		const shopItem = await ShopItem.findByIdAndDelete(req.params.id)
		res.send(shopItem)
	} catch (err) {
		res.status(500).send(err)
	}
}

module.exports = {
	postShopItems,
	getShopItems,
	updateShopItem,
	deleteShopItem,
}
