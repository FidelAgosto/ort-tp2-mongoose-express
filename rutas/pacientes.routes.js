const {getPacienteBydni, postPaciente, deletePacienteByDni, getPacientes} =  require('../dao/daoPaciente.js')
const pacientesRoutes = {
    index: async function(req,res){

        try {
            const pacientes = await getPacientes()
            res.status(200).json({ 
                pacientes
            })
        } catch (error) {
            res.status(404).send('Pacientes no encontrados!!');
        }
    
    },
    crear:async function(req,res){
        try {
            const pacienteGuardado = await postPaciente(req.body)
            res.status(201).json({ 
                pacienteGuardado
            })
        } catch (error) {
            res.status(404).send('No es posible crear el paciente!!');
        }
    },
    obtenerPaciente: async function(req,res){

        try {
            const paciente = await getPacienteBydni(req.params.dni)
            res.status(200).json({ 
                paciente
            })
        } catch (error) {
            res.status(404).send('Paciente no encontrado!!');
        }
    
    },
    borrarPaciente: async function(req,res){
        try {
            const pacienteEliminado = await deletePacienteByDni(req.params.dni)
            res.status(204).json({ 
                pacienteEliminado
            })
        } catch (error) {
            res.status(404).send('No es posible borrar el paciente!!');
        }
    }
}

module.exports = pacientesRoutes