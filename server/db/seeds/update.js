/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('update').del()
  await knex('update').insert([
    { id: 1, date: 'null', page: 0, comment: 'null' },
    { id: 2, date: 'null', page: 0, comment: 'null' },
    { id: 3, date: 'null', page: 0, comment: 'null' },
  ])
}
