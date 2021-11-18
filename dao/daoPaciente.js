const mongoose = require('mongoose')
require('../models/paciente')
var db = mongoose.connect('mongodb://localhost:27017/ort-tp2')

async function getPacientes() {
    return await mongoose.models.Paciente.find()
}

async function getPacienteBydni(dni) {
    return await mongoose.models.Paciente.find({dni: dni})
}

async function postPaciente(paciente) {
    return await mongoose.models.Paciente.create(paciente)
}

async function deletePacienteByDni(dni) {
    return await mongoose.models.Paciente.deleteOne({dni: dni})
}

module.exports = {
    getPacienteBydni,
    postPaciente,
    deletePacienteByDni,
    getPacientes
}