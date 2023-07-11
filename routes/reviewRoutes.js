const express = require('express')
const router = express.Router()
const {createReview, getAllReviews, getSingleReview, updateReview, deleteReview} = require('../controllers/reviewController')
const authenticateUser = require('../middleware/authentication')
const { checkPermissions } = require('../middleware/user-permissions')
const testUser = require('../middleware/testUser')

router.route('/').get(getAllReviews)
router.route('/product/:productId').post(authenticateUser,testUser, checkPermissions('user'), createReview)
router.route('/product/:productId/review/:reviewId')
.get(getSingleReview)
.patch(authenticateUser,testUser, checkPermissions('user'), updateReview)
.delete(authenticateUser,testUser, checkPermissions('user'), deleteReview)

module.exports = router