// Obtiene la conexión con la base de datos
const knex = require('../database/connection');

// Crea un nuevo Producto (pero no lo almacena en la base)
exports.factory = (ticket, name, email, phone) => {
  return {
    ticket: ticket,
    name: name,
    email: email,
    phone: phone,
  }
}

// Obtiene todos los productos en la base
exports.all = () => {
    // Realiza la consulta dentro de knex
    return knex
      .select('*')
      .from('raffle');
  }

  
  // Obtiene la información de un producto por su id
  exports.find = (ticket) => {
    return knex
      .select('*')
      .from('raffle')
      .where('ticket', ticket)
      .first();
  }

  // Actualiza el producto con el id dado con la información definida en product
exports.update = (ticket, raffle) => {
    return knex('raffle')
      .update(raffle)
      .where('ticket', ticket);
  }