export async function seed(knex) {
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      nickname: 'chef',
      email: 'chef@gg.com',
      auth0_id: 'auth0|655b4ab77ebf1e881985fe63',
    },
    {
      id: 2,
      nickname: 'suwon',
      email: 'suwon@gg.com',
      auth0_id: 'auth0|6556c9c747db98bd7f4edb4f',
    },
  ])
}
