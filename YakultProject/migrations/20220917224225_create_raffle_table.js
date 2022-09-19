exports.up = function(knex) {
    return knex.schema
      .createTable('raffle', (table) => {
        table.increments('id');
        table.float('ticket');
        table.string('name', 255).notNullable();
        table.string('email', 512).notNullable();
        table.integer('phone');
        table.integer('gift');
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTable('raffle');
  };