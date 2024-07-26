const express = require('express');
const {getAll, create, getById, destroy, updated} = require('../controllers/userController')

const userRouter = express.Router()

userRouter.route('/')
    .get(getAll)
    .post(create)

userRouter.route('/:id')
    .get(getById)
    .delete(destroy)
    .put(updated)

module.exports = userRouter