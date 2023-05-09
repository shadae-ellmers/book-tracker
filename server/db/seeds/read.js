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
      cover: 'null',
    },
    {
      id: 2,
      title: "In My Father's Den",
      author: 'Maurice Gee',
      cover: 'null',
    },
    {
      id: 3,
      title: 'Macbeth',
      author: 'William Shakespeare',
      cover: 'null',
    },
    {
      id: 4,
      title: 'The Perks of Being a Wallflower',
      author: 'Stephen Chbosky',
      cover: 'null',
    },
    {
      id: 5,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      cover: 'null',
    },
    {
      id: 6,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      cover: 'null',
    },
    {
      id: 7,
      title: 'Evermore',
      author: 'Alyson Noel',
      cover: 'null',
    },
    {
      id: 8,
      title: 'Hush, Hush',
      author: 'Becca Fitzpatrick',
      cover: 'null',
    },
    {
      id: 9,
      title: 'Stolen',
      author: 'Lucy Christopher',
      cover: 'null',
    },
    {
      id: 10,
      title: 'Will Grayson, Will Grayson',
      author: 'John Green & David Levithan',
      cover: 'null',
    },
    {
      id: 11,
      title: 'Crescendo',
      author: 'Becca Fitzpatrick',
      cover: 'null',
    },
    {
      id: 12,
      title: 'Headgames',
      author: 'Casey Lever',
      cover: 'null',
    },
    {
      id: 13,
      title: 'Room',
      author: 'Emma Donoghue',
      cover: 'null',
    },
    {
      id: 14,
      title: 'Arrival',
      author: 'Charlotte McConaghy',
      cover: 'null',
    },
  ])
}
