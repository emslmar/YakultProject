/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

let inputs = [];

function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

for(let i = 1; i <= 1050; i++){
    inputs.push({ticket:between(100000,199999), name:'', email:'', phone:0, gift:between(1000,1999)});
}

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('raffle').del()
  await knex('raffle').insert(inputs);
};
