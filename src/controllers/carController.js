const catchError = require('../utils/catchError');
const Car =  require("../models/Car");

const getAll = catchError(async (req, res) => {
    const result = await Car.findAll() // ? select * from users;
    return res.json(result)
})

const create = catchError(async (req, res) => {
    const result = await Car.create(req.body)
    return res.json(result)
})

const getById = catchError(async (req, res) => {

    const { id } = req.params;

    const result = await Car.findByPk(id)
    return res.json(result)
})

const destroy = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Car.destroy({where: {id}})
    if(!result) return res.status(404).json('User not found')

    return res.sendStatus(204) // ? No content
})

const updated = catchError(async (req, res) => {
    const { id } = req.params;
    const user = await Car.update(
        req.body,
        {where: {id}, returning: true}
    )
    if(user[0] === 0) return res.sendStatus(404)


    return res.status(200).json(user[1][0])
})



module.exports = { getAll, create, getById, destroy, updated }