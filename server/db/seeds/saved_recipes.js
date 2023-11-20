export async function seed(knex) {
  await knex('saved_recipes').del()
  await knex('saved_recipes').insert([
    {
      id: 9001,
      user_id: 'suwon',
      ingredient_ids: [1001, 1002],
    },
    {
      id: 9002,
      user_id: 'ben',
      ingredient_ids: [1003],
    },
  ])
}
