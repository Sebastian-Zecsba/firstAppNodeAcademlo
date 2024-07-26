const express = require('express');
const userRouter = require('./userRouter');
const carRouter = require('./carRouter');

const router = express.Router();

// colocar las rutas aquí
router.use('/users', userRouter)
router.use('/cars', carRouter)

module.exports = router;