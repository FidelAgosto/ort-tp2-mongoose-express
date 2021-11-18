const {getMedicos, postMedico, deleteMedicoByDni, getMedicoByDni} =  require('../dao/daoMedico.js')
const medicosRoutes = {
    index: async function(req,res){

        try {
            const medicos = await getMedicos()
            res.status(200).json({ 
                medicos
            })
        } catch (error) {
            res.status(404).send('Medicos no encontrados!!');
        }
    
    },
    crear:async function(req,res){
        try {
            const medico2 = await postMedico(req.body)
            res.status(201).json({ 
                medico2
            })
        } catch (error) {
            res.status(404).send('No es posible crear el medico!!');
        }
    },
    obtenerMedico: async function(req,res){

        try {
            const medico = await getMedicoByDni(req.params.dni)
            res.status(201).json({ 
                medico
            })
        } catch (error) {
            res.status(404).send('Medico no encontrado!!');
        }
    
    },
    borrarMedico: async function(req,res){
        try {
            const medicoEliminado = await deleteMedicoByDni(req.params.dni)
            res.status(201).json({ 
                medicoEliminado
            })
        } catch (error) {
            res.status(404).send('No es posible borrar el medico!!');
        }
    }
}

module.exports = medicosRoutes