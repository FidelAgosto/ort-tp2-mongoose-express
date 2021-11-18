const mongoose = require('mongoose')
const {Schema} = mongoose


const Medico = new Schema({

    nombre : {
        
        type : String

    },
    apellido : {
        
        type : String

    },
    email : {

        type : String

    },
    especialidad : {

        type : String
    
    },
    dni : {

        type : String
        
    }

})

module.exports = mongoose.model('Medico', Medico)