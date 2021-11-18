const mongoose = require('mongoose')
require('../models/turno')
var db = mongoose.connect('mongodb://localhost:27017/ort-tp2')

async function getTurnos() {
    return await mongoose.models.Turno.find()
}

async function getTurnoByDniPaciente(dniPaciente) {
    return await mongoose.models.Turno.find({dni: dniPaciente})
}

async function postTurno(turno) {
    return await mongoose.models.Turno.create(turno)
}

async function deleteTurnoByDniPaciente(dniPaciente) {
    return await mongoose.models.Turno.deleteOne({dni: dniPaciente})
}

module.exports = {
    getTurnoByDniPaciente,
    postTurno,
    deleteTurnoByDniPaciente,
    getTurnos
}