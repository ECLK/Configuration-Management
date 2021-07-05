const db = require('../models');
const bcrypt = require('bcrypt');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = db.user;
const Token = db.token;
const saltRounds = 10;
const redis_client = require('../../redis_connect')

const generateAccessToeken = (uid) => {
    const accessToken = jwt.sign({ id: uid }, process.env.JWT_ACCESS_SECRET, { expiresIn: process.env.JWT_ACCESS_TIME });
    return accessToken;
}

const generateRefreshToeken = (uid) => {
    const refreshToken = jwt.sign({ id: uid }, process.env.JWT_REFRESH_SECRET, { expiresIn: process.env.JWT_REFRESH_TIME });
    redis_client.get(uid.toString(), (err, data) => {
        if (err) throw err;
        redis_client.set(uid.toString(), JSON.stringify({ token: refreshToken }))
    })
    return refreshToken;
}

exports.signout = async (req, res) => {
    const uid = req.userData.sub;
    const token = req.userData.token;
    await redis_client.del(uid.toString());
    await redis_client.set('BL_' + uid.toString(), token);
    res.status(200).send({
        message: 'Logout Success'
    })
}

exports.signIn = async (req, res) => {
    const username = req.body.un;
    const password = req.body.pw;
    console.log('-----' + username);
    //validate username amd password
    try {
        await User.findOne({ where: { email: username } })
            .then(data => {
                // TODO check data is null
                bcrypt.compare(password, data.password, function (err, result) {
                    if (result == true) {
                        const at = generateAccessToeken(data.id);
                        const rt = generateRefreshToeken(data.id)
                        res.send({
                            user_name: data.name,
                            access_token: at,
                            refresh_token: rt
                        });
                    } else {
                        res.status(404)
                            .send({
                                status: false,
                                message: "Password not valid. "
                            });
                    }
                });

            })
            .catch(err => {
                res.status(404)
                    .send({
                        status: false,
                        message: "Password not valid. "
                    });
            });

    } catch (error) {
        res.status(404)
            .send({
                status: false,
                message: "Password or Username not valid. "
            });
    }
}

exports.signInWithToken = async (req, res) => {
    const uid = res.userData.sub;
    try {
        await User.findOne({ where: { id: uid } })
            .then(data => {
                const at = generateAccessToeken(uid);
                const rt = generateRefreshToeken(uid);
                res.send({
                    user_name: data.name,
                    access_token: at,
                    refresh_token: rt
                });
            })
            .catch(err => {
                res.status(404)
                    .send({
                        status: false,
                        message: "User not exist "
                    });
            })

    } catch (err) {
        res.status(404)
            .send({
                status: false,
                message: "User not valid. "
            });
    }
}

exports.create = async (req, res) => {
    //validations
    if (!req.body.email || !req.body.password) {
        res.status(404)
            .send({
                status: false,
                message: "Email and Password can't be empty. "
            });
        return;
    }

    const password = req.body.password;
    const encryptedPassword = await bcrypt.hash(password, saltRounds)

    const user = {
        id: req.body.id,
        name: req.body.name,
        tp: req.body.tp,
        mobile: req.body.mobile,
        email: req.body.email,
        watsup: req.body.watsup,
        password: encryptedPassword
    }

    await User.create(user)
        .then(data => {
            res.status(200).send({
                status: true,
                message: 'Success',
                data: data
            });
        })
        .catch(err => {
            res.status(500).send({
                status: false,
                message: err.message || "Error occurs creating the User"
            });
        });
};

exports.findAll = async (req, res) => {
    await User.findAll({ include: { all: true } })
        .then(data => {
            res.status(200).send({
                status:true,
                data:data
            })

        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'User not found'
            })
        });
};

exports.findOne = async (req, res) => {
    const id = req.params.id;
    await User.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send(
                {
                    message: err.message || "Error retreiving User with id= " + id
                }
            );
        });
};

exports.update = async (req, res) => {
    const id = req.params.id;

    await User.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with id=" + id
            });
        });
}

