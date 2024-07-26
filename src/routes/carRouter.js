const express = require('express');
const { getAll, destroy, updated } = require('../controllers/carController');
const { create } = require('../controllers/carController');
const { getById } = require('../controllers/carController');

const carRouter = express.Router()

carRouter.route('/')
    .get(getAll)
    .post(create)

carRouter.route('/:id')
    .get(getById)
    .delete(destroy)
    .put(updated)

module.exports = carRouter