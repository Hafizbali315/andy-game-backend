const express = require('express')
const router = express.Router()

const { postShopItems, getShopItems, updateShopItem, deleteShopItem } = require('../controllers/shopItem')

router.post('/shop-items', postShopItems)
router.get('/shop-items', getShopItems)
router.put('/shop-items/:id', updateShopItem)
router.delete('/shop-items/:id', deleteShopItem)

module.exports = router
