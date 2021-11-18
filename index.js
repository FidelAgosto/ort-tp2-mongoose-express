const express = require('express')
const app = express()

//MIDDLEWARES
app.use(express.json())

//RUTAS
const turnosRoutes = require('./rutas/turnos.routes')
const medicosRoutes = require('./rutas/medicos.routes')
const pacientesRoutes = require('./rutas/pacientes.routes')

//PACIENTE
app.get('/getPacientes', pacientesRoutes.index)
app.get('/getPacienteByDni/:dni',pacientesRoutes.obtenerPaciente)
app.post('/postPaciente',pacientesRoutes.crear)
app.delete('/deletePacienteByDni/:dni',pacientesRoutes.borrarPaciente)

//MEDICO
app.get('/getMedicos', medicosRoutes.index)
app.get('/getMedicoByDni/:dni',medicosRoutes.obtenerMedico)
app.post('/postMedico',medicosRoutes.crear)
app.delete('/deleteMedicoByDni/:dni',medicosRoutes.borrarMedico)

//TURNO
app.get('/getTurnos', turnosRoutes.index)
app.get('/getTurnoByDniPaciente/:dni',turnosRoutes.obtenerTurno)
app.post('/postTurno',turnosRoutes.crear)
app.delete('/deleteTurnoByDni/:dni',turnosRoutes.borrarTurno)

const puerto = 4444
app.listen(puerto, ()=>console.log("Servidor escuchando en puerto: " + puerto))