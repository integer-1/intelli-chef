export async function seed(knex) {
  await knex('ingredients').del()
  await knex('ingredients').insert([
    {
      item_name: 'bread',
    },
    {
      item_name: 'butter',
    },
    {
      item_name: 'cheese',
    },
  ])
}
