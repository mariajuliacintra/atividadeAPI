// Importa o módulo Router do express
// Router será utilizado para definir rotas específicas da aplicação
const router = require('express').Router();


//Importa a controller onde contém a lógica relacionada a professores
const teacherController = require('../controllers/teacherController');
const controllerNumbers = require('../controllers/controllerNumbers');

//Rota POST para '/teacher'
router.post('/teacher/', teacherController.postTeacher);
router.get('/teacher/', teacherController.getTeacher);

//rota para os numbers '/numbers/'
router.post('/number/', controllerNumbers.postNumbers);

module.exports = router
