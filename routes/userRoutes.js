const express = require('express')
const router = express.Router()
const {getAllUsers, getSingleUser, showCurrentUser, updateUser, updateUserPassword} = require('../controllers/userController')
const { checkPermissions } = require('../middleware/user-permissions')
const testUser = require('../middleware/testUser')

router.route('/').get(checkPermissions('admin'), getAllUsers)
router.route('/showMe').get(showCurrentUser)
router.route('/updateUserPassword').patch(testUser, checkPermissions('user'),updateUserPassword)
router.route('/updateUser').patch(checkPermissions('user'), testUser, updateUser)
router.route('/:id').get(testUser, getSingleUser)

module.exports = router