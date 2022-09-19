// Reglas para la respuesta para la petición "/raffle/register"
exports.register = (req, res) => {
    res.render('raffle/register');
}

// Importa el modelo de raffle
let RaffleModel = require('../models/Raffle')

exports.edit = (req, res) => {
    // Obtiene el id que viene en la url
    let ticket = req.param('ticket');
    console.log('este es el tickettttt: ' +ticket);
    RaffleModel.find(ticket).then((raffle) => {
      // Si el producto no existe entonces
      if (raffle == null) {
        // Regresa el error 404
        res.status(404).send('Not found');
        return;
      }
      else if(raffle.name != '' || raffle.email != '' || raffle.phone != 0){
        res.send('Este ticket ya fue registrado!');
        return;
      }
      // Si el producto existe entonces muestra la vista products/edit.hbs
      // con la información del producto
      res.render('raffle/register', {raffle: raffle});
    });
  }

  // Reglas para la respuesta para la petición "/"
exports.showall = (req, res) => {
  console.log('show all called');
  // Nota que la consulta a los productos utiliza "promesas"
  // conoce más en: 
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise
  RaffleModel.all()
    .then((data) => {
      // Guardamos los productos en una variable
      let raffles = data;
      // Enviamos los datos a la vista
      res.render('raffle/showall', { raffles: raffles });
    });
}


  exports.update = (req, res) => {
    // Obtiene el id que viene en la url
    let ticket = req.params.ticket;
    console.log("a ver si el ticket ahora si: " +ticket);
    // Busca dentro de la base de datos el producto con el id indicado
    RaffleModel.find(ticket).then((raffle) => {
      // Si el producto no existe entonces
      if (raffle == null) {
        // Regresa el error 404
        res.status(404).send('Not found');
        return;
      }
  
      // Define los datos del producto actualizado
      let updateRaffle = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
      }
  
      // Actualiza los datos del producto
      RaffleModel.update(raffle.ticket, updateRaffle)
        .then((ticket) => {
          // Al terminar redirige el índice
          res.render('raffle/gift', {raffle:raffle, first:Math.trunc(raffle.gift/1000), second:Math.trunc((raffle.gift/100)%10), third:Math.trunc((raffle.gift/10)%10), fourth:raffle.gift%10});
        });
    });
  }