/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('toread').del()
  await knex('toread').insert([
    {
      id: 2001,
      book_id: 'a',
      title: 'Sharp Objects',
      author: 'Gillian Flynn',
      cover: 'null',
    },
    {
      id: 2002,
      book_id: 'b',
      title: "Since You've Been Gone",
      author: 'Morgan Matson',
      cover: 'null',
    },
    {
      id: 2003,
      book_id: 'c',
      title: 'Harry Potter and the Deathly Hallows',
      author: 'J.K. Rowling',
      cover: 'null',
    },
    {
      id: 2004,
      book_id: 'd',
      title: 'Harry Potter and the Order of the Phoenix',
      author: 'J.K. Rowling',
      cover: 'null',
    },
    {
      id: 2005,
      book_id: 'e',
      title: 'Harry Potter and the Half-Blood Prince',
      author: 'J.K. Rowling',
      cover: 'null',
    },
  ])
}
