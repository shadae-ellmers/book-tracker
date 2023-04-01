/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('read', function (table) {
    table.increments('id').primary()
    table.string('title')
    table.string('author')
    table.string('date')
    table.integer('rating')
    table.integer('pages')
    table.string('cover')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('read')
}
