/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('read').del()
  await knex('read').insert([
    {
      id: 1001,
      book_id: 'a',
      title: 'The Veldt',
      author: 'Ray Bradbury',
      cover: 'null',
      rating: '4',
    },
    {
      id: 1002,
      book_id: 'b',
      title: "In My Father's Den",
      author: 'Maurice Gee',
      cover: 'null',
      rating: '4',
    },
    {
      id: 1003,
      book_id: 'c',
      title: 'Macbeth',
      author: 'William Shakespeare',
      cover: 'null',
      rating: '4',
    },
    {
      id: 1004,
      book_id: 'd',
      title: 'The Perks of Being a Wallflower',
      author: 'Stephen Chbosky',
      cover: 'null',
      rating: '4',
    },
    {
      id: 1005,
      book_id: 'e',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      cover: 'null',
      rating: '4',
    },
  ])
}
