/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('saved_recipes', (table) => {
    table.increments('id').primary()
    table.string('user_id')
    table.specificType('ingredient_ids', 'integer[]')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('saved_recipes')

}
