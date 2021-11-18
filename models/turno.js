const mongoose = require('mongoose')
const {Schema} = mongoose


const Turno = new Schema({

    fecha : {
        
        type : String

    },
    hora : {

        type : String

    },
    dniMedico : {
        
        type : String

    },
    dniPaciente : {

        type : String

    },
})

module.exports = mongoose.model('Turno', Turno)