import styles from './SavedRecipeCard.module.css'


interface RecipeProps {
  recipe: {
    id: number
    dish_name: string
    preparation_time: string
    cooking_time: string
    servings: number
    ingredients: string
    method: string
    auth0_id: string
  }
}

const SavedRecipeCard: React.FC<RecipeProps> = (recipe) => {

  console.log(recipe.recipe)
  const methodSteps: string[] = recipe.recipe.method
    .split('\n')
    .map((step: string) => step.trim())
    .filter((step: string) => step)

  return (
    <>
      <div className={styles['recipe-container']}>
        <div className={styles['recipe']}>
          <p className={styles['dish-name']}>{recipe.recipe.dish_name}</p>
          <p>Preparation Time: {recipe.recipe.preparation_time} minutes</p>
          <p>Cooking Time: {recipe.recipe.cooking_time} minutes</p>
          <p>Servings: {recipe.recipe.servings}</p>
          <h2>Ingredients</h2>
          <ul className={styles['ingredients']}>
            {recipe.recipe.ingredients
              .split('\n')
              .map((ingredient: string, index: number) => (
                <li key={index}>{ingredient}</li>
              ))}
          </ul>
          <h2>Method</h2>
          <ol className={styles['method']}>
            {methodSteps.map((step, index) => (
              <li key={index}>{step.replace(/^\d+\.\s/, '')}</li>
            ))}
          </ol>
        </div>
      </div>
    </>
  )
}

export default SavedRecipeCard
