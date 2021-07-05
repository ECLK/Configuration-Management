require('dotenv').config();
const jwt = require('jsonwebtoken');
const redis_client = require('../../redis_connect')

const veryfyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        req.userData = decode;
        next();
    } catch (error) {
        return res.status(401).json({ status: false, message: 'Token is not valid', data: error })
    }
}

const veryfyRefreshToken = (req, res, next) => {
    const token = req.body.token;
    if (token === null) return res.status(401).json({ status: false, message: "Refresh Token is not found" })
    try {
        const decode = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
        res.userData = decode;
        // check refresh token in store
        redis_client.get(decode.sub.toString(), (err, data) => {
            if (err) throw err;
            if (data === null) return res.status(401).json({ status: false, message: "Refresh Token is not found" })
            if (JSON.stringify(data.token) != token) return res.status(401).json({ status: false, message: "Refresh Token is not valid" })
            next();
        })
    } catch (error) {
    }
}

module.exports = {
    veryfyToken,
    veryfyRefreshToken
}