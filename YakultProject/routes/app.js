// De express obtiene una instancia del componente Router
let router = require('express').Router();

let PagesController = require('../controllers/PagesController')
let RaffleController = require('../controllers/RaffleController')
// Establece que al hacer una petición GET a la ruta / se conteste
// con las palabras "Hello World!"
router.get('/', PagesController.homepage);

// Identifica la ruta "/about" y la respuesta de la ruta
router.get('/about', PagesController.about);


// Implementa ver el detalle de un raffle
router.get('/raffle', RaffleController.edit);

// Maneja la actualización del raffle
router.put('/raffle/:ticket', RaffleController.update);

// Maneja la actualización del raffle
router.get('/raffle/showAll', RaffleController.showall);

// Exporta las configuraciones
module.exports = router;