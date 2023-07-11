const express = require('express')

const router = express.Router()

const {getAllOrders, getSingleOrder, getCurrentUserOrders, createOrder, updateOrder, deleteOrder} = require('../controllers/orderController')
const { checkPermissions } = require('../middleware/user-permissions')
const testUser = require('../middleware/testUser')
router
.route('/')
.get(checkPermissions('admin'),getAllOrders)
.post(testUser,createOrder)

router
.route('/showAllMyOrders')
.get(getCurrentUserOrders)

router
.route('/:id')
.get(getSingleOrder)
.patch(testUser,updateOrder)
.delete(testUser,deleteOrder)


module.exports = router


