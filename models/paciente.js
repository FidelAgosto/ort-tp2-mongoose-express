const mongoose = require('mongoose')
const {Schema} = mongoose


const Paciente = new Schema({

    nombre : {
        
        type : String

    },
    apellido : {
        
        type : String

    },
    email : {

        type : String

    },
    dni : {

        type : String
        
    }

})

module.exports = mongoose.model('Paciente', Paciente)