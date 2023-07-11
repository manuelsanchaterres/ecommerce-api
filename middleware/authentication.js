const CustomError = require('../errors/')
const { isTokenValid } = require('../utils/functions');

const authenticateUser = async (req,res,next) => {

    const token = req.signedCookies.token

    if (!token) {

        throw new CustomError.UnauthenticatedError('Authentication invalid')
    }

    try {
        
        const payload = isTokenValid({token})
        const testUser = payload.userId === '64ad37047131ed7e6e70f9d7';
        req.user = {name: payload.name, userId: payload.userId, role: payload.role, testUser}

        next()
    
    } catch (error) {

        throw new CustomError.UnauthenticatedError('Authentication invalid')
    }

}

module.exports = authenticateUser