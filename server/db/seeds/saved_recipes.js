export async function seed(knex) {
  await knex('saved_recipes').del()
  await knex('saved_recipes').insert([
    {
      id: 9001,
      user_id: 1,
      recipe_ids: [1001, 1002],
    },
    {
      id: 9002,
      user_id: 2,
      recipe_ids: [1003],
    },
  ])
}
