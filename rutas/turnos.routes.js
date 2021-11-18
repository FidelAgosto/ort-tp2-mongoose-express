const {getTurnos, postTurno, deleteTurnoByDniPaciente, getTurnoByDniPaciente} =  require('../dao/daoTurno.js')
const turnosRoutes = {
    index: async function(req,res){

        try {
            const turnos = await getTurnos()
            res.status(200).json({ 
                turnos
            })
        } catch (error) {
            res.status(404).send('Turnos no encontrados!!');
        }
    
    },
    crear:async function(req,res){
        try {
            const turnoCreado = await postTurno(req.body)
            res.status(201).json({ 
                turnoCreado
            })
        } catch (error) {
            res.status(404).send('No es posible crear el turno!!');
        }
    },
    obtenerTurno: async function(req,res){

        try {
            const turno = await getTurnoByDniPaciente(req.params.dniPaciente)
            res.status(201).json({ 
                turno
            })
        } catch (error) {
            res.status(404).send('Turno no encontrado!!');
        }
    
    },
    borrarTurno: async function(req,res){
        try {
            const turnoEliminado = await deleteTurnoByDniPaciente(req.params.dniPaciente)
            res.status(201).json({ 
                turnoEliminado
            })
        } catch (error) {
            res.status(404).send('No es posible borrar el turno!!');
        }
    }
}

module.exports = turnosRoutes