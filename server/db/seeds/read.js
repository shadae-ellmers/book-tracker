/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('read').del()
  await knex('read').insert([
    {
      id: 1,
      title: 'The Veldt',
      author: 'Ray Bradbury',
      date: 'null',
      rating: 8,
      pages: 45,
      cover: 'null',
    },
    {
      id: 2,
      title: "In My Father's Den",
      author: 'Maurice Gee',
      date: 'null',
      rating: 6,
      pages: 175,
      cover: 'null',
    },
    {
      id: 3,
      title: 'Macbeth',
      author: 'William Shakespeare',
      date: 'null',
      rating: 8,
      pages: 249,
      cover: 'null',
    },
    {
      id: 4,
      title: 'The Perks of Being a Wallflower',
      author: 'Stephen Chbosky',
      date: 'null',
      rating: 8,
      pages: 213,
      cover: 'null',
    },
    {
      id: 5,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      date: 'null',
      rating: 10,
      pages: 374,
      cover: 'null',
    },
    {
      id: 6,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      date: 'null',
      rating: 6,
      pages: 277,
      cover: 'null',
    },
    {
      id: 7,
      title: 'Evermore',
      author: 'Alyson Noel',
      date: 'null',
      rating: 6,
      pages: 301,
      cover: 'null',
    },
    {
      id: 8,
      title: 'Hush, Hush',
      author: 'Becca Fitzpatrick',
      date: 'null',
      rating: 8,
      pages: 391,
      cover: 'null',
    },
    {
      id: 9,
      title: 'Stolen',
      author: 'Lucy Christopher',
      date: 'null',
      rating: 8,
      pages: 304,
      cover: 'null',
    },
    {
      id: 10,
      title: 'Will Grayson, Will Grayson',
      author: 'John Green & David Levithan',
      date: 'null',
      rating: 8,
      pages: 310,
      cover: 'null',
    },
    {
      id: 11,
      title: 'Crescendo',
      author: 'Becca Fitzpatrick',
      date: 'null',
      rating: 6,
      pages: 427,
      cover: 'null',
    },
    {
      id: 12,
      title: 'Headgames',
      author: 'Casey Lever',
      date: 'null',
      rating: 8,
      pages: 284,
      cover: 'null',
    },
    {
      id: 13,
      title: 'Room',
      author: 'Emma Donoghue',
      date: 'null',
      rating: 8,
      pages: 321,
      cover: 'null',
    },
    {
      id: 14,
      title: 'Arrival',
      author: 'Charlotte McConaghy',
      date: 'null',
      rating: 10,
      pages: 360,
      cover: 'null',
    },
  ])
}