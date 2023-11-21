// Import chairs from '../data/chairs.js'

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('recipes').del()
  await knex('recipes').insert([
    {
      id: 1001,
      dish_name: 'Onion and Pork Stir-Fry',
      preparation_time: '15 minutes',
      cooking_time: '20 minutes',
      servings: 4,
      ingredients: `1 lb pork loin, thinly sliced
        2 large onions, thinly sliced
        3 cloves garlic, minced
        1 tablespoon ginger, grated
        1/4 cup soy sauce
        2 tablespoons oyster sauce
        1 tablespoon sesame oil
        2 tablespoons vegetable oil
        1 teaspoon sugar
        1/2 teaspoon black pepper
        2 green onions, sliced (for garnish)
        Cooked rice (for serving)`,
      method: `1. Marinate the Pork:
        In a bowl, combine the sliced pork with soy sauce, oyster sauce, grated ginger, and black pepper. Let it marinate for at least 10 minutes.
        
        2. Prep the Ingredients:
        Thinly slice the onions and mince the garlic. Slice the green onions for garnish.
        
        3. Stir-Fry:
        Heat vegetable oil in a large pan or wok over medium-high heat. Add minced garlic and stir-fry for about 30 seconds until fragrant.
        
        Add the marinated pork slices to the pan. Stir-fry until the pork is cooked through and browned, approximately 3-4 minutes.
        
        Add the sliced onions to the pan and continue stir-frying for an additional 3-4 minutes until the onions are tender yet still crisp.
        
        4. Seasoning:
        Pour in sesame oil and sprinkle sugar over the pork and onions. Stir to combine, allowing the flavors to meld for another 1-2 minutes.
        
        5. Garnish and Serve:
        Garnish the stir-fry with sliced green onions. Taste and adjust the seasoning if necessary.
        
        Serve the onion and pork stir-fry over cooked rice.`,
      auth0_id: 'auth0|655b4ab77ebf1e881985fe63',
    },
    {
      id: 1002,
      dish_name: 'Spaghetti Bolognese',
      preparation_time: '20 minutes',
      cooking_time: '30 minutes',
      servings: 6,
      ingredients: `1 lb ground beef
        1 onion, finely chopped
        2 cloves garlic, minced
        1 carrot, grated
        1 celery stalk, finely chopped
        1 can (28 oz) crushed tomatoes
        1/2 cup red wine
        2 tablespoons tomato paste
        1 teaspoon dried oregano
        1 teaspoon dried basil
        Salt and pepper to taste
        1 lb spaghetti
        Grated Parmesan cheese (for serving)`,
      method: `1. Cook the Pasta:
        Cook the spaghetti according to package instructions. Drain and set aside.

        2. Prepare the Sauce:
        In a large skillet, brown the ground beef over medium-high heat. Add chopped onions, garlic, grated carrot, and chopped celery. Cook until vegetables are tender.

        3. Add Tomato Sauce:
        Pour in crushed tomatoes, red wine, and tomato paste. Stir in dried oregano and basil. Season with salt and pepper. Simmer for 20 minutes.

        4. Combine Pasta and Sauce:
        Toss the cooked spaghetti into the sauce, ensuring the pasta is well coated.

        5. Serve:
        Dish out the Spaghetti Bolognese into bowls. Sprinkle with grated Parmesan cheese and serve hot.`,
      auth0_id: 'auth0|6556c9c747db98bd7f4edb4f',
    },
    {
      id: 1003,
      dish_name: 'Grilled Lemon Herb Chicken',
      preparation_time: '10 minutes',
      cooking_time: '20 minutes',
      servings: 4,
      ingredients: `4 boneless, skinless chicken breasts
        1/4 cup olive oil
        2 tablespoons lemon juice
        2 cloves garlic, minced
        1 teaspoon dried oregano
        1 teaspoon dried thyme
        Salt and pepper to taste
        Lemon slices (for garnish)
        Fresh parsley (for garnish)`,
      method: `1. Marinate the Chicken:
        In a bowl, mix olive oil, lemon juice, minced garlic, dried oregano, dried thyme, salt, and pepper. Coat the chicken breasts with the marinade and let it sit for at least 10 minutes.

        2. Preheat the Grill:
        Preheat your grill to medium-high heat.

        3. Grill the Chicken:
        Grill the marinated chicken breasts for about 6-8 minutes per side or until fully cooked.

        4. Garnish and Serve:
        Transfer the grilled chicken to a serving platter. Garnish with lemon slices and fresh parsley.

        5. Serve:
        Serve the Grilled Lemon Herb Chicken with your favorite side dishes. Enjoy!`,
      auth0_id: 'auth0|6556c9c747db98bd7f4edb4f',
    },
    // Add more recipes as needed
  ])
}
