/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('toread', function (table) {
    table.increments('id').primary()
    table.string('book_id')
    table.string('title')
    table.string('author')
    table.string('cover')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('toread')
}
