const {
    createProduct, 
    getAllProducts, 
    getSingleProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/productController')
const express = require('express')
const router = express.Router()
const authenticateUser = require('../middleware/authentication')
const { checkPermissions } = require('../middleware/user-permissions')
const { uploadImageLocal, uploadImageCloudinary } = require('../controllers/uploadImagesController')
const { getSingleProductReviews } = require('../controllers/reviewController')
const testUser = require('../middleware/testUser')

router
.route('/')
.get(getAllProducts)
.post(authenticateUser,testUser,checkPermissions('admin'), createProduct)

router
.route('/uploadImage')
.post(authenticateUser,testUser,checkPermissions('admin'),uploadImageCloudinary)

router
.route('/:id')
.get(getSingleProduct)
.patch(authenticateUser,testUser,checkPermissions('admin'),updateProduct)
.delete(authenticateUser,testUser,checkPermissions('admin'),deleteProduct)

router
.route('/:id/reviews')
.get(getSingleProductReviews)



module.exports = router


