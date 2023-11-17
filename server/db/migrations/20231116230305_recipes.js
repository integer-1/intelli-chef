/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('recipes', (table) => {
    table.increments('id').primary()
    table.string('dish_name')
    table.string('preparation_time')
    table.string('cooking_time')
    table.integer('servings')
    table.string('ingredients')
    table.string('method')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('recipes')
}
