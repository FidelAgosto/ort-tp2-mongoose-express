const mongoose = require('mongoose')
require('../models/medico')
var db = mongoose.connect('mongodb://localhost:27017/ort-tp2')

async function getMedicos() {
    return await mongoose.models.Medico.find()
}

async function getMedicoByDni(dni) {
    return await mongoose.models.Medico.find({dni: dni})
}

async function postMedico(medico) {
    return await mongoose.models.Medico.create(medico)
}

async function deleteMedicoByDni(dni) {
    return await mongoose.models.Medico.deleteOne({dni: dni})
}

module.exports = {
    getMedicoByDni,
    postMedico,
    deleteMedicoByDni,
    getMedicos
}