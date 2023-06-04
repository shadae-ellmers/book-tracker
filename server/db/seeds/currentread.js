/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('currentread').del()
  await knex('currentread').insert([
    {
      id: 1,
      book_id: 'a',
      title: 'The Knife of Never Letting Go',
      author: 'Patrick Ness',
      cover: 'null',
    },
  ])
}
