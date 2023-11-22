import { useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { getRecipeById } from '../../apis/recipes'
import { useRecipe } from '../../hooks/useRecipe'
import styles from './SavedRecipeCard.module.css'
import SideBar from '../SideBar/SideBar'
import Header from '../Header/Header'

const SavedRecipeCard = () => {
  const { id } = useParams()
  const recipeId = id ? parseInt(id, 10) : undefined
  const { deleteRecipeMutation } = useRecipe()
  const navigate = useNavigate()

  const {
    data: recipeById,
    isLoading,
    isError,
  } = useQuery(['recipeById', id], () => getRecipeById(recipeId as number))

  if (isError) {
    return (
      <>
        <p>Something went wrong!</p>
      </>
    )
  }

  if (!recipeById || isLoading) {
    return <p>...loading</p>
  }

  const recipe = recipeById[0]

  const handleDelete = (id: number) => {
    deleteRecipeMutation.mutate(id)
    navigate('/')
    window.location.reload()
  }

  const methodSteps: string[] = recipe.method
    .split('\n')
    .map((step: string) => step.trim())
    .filter((step: string) => step)

  return (
    <>
      <Header />
      <SideBar />
      <div className={styles['recipe-container']}>
        <div className={styles['recipe']}>
          <p className={styles['dish-name']}>{recipe.dish_name}</p>
          <p>Preparation Time: {recipe.preparation_time} minutes</p>
          <p>Cooking Time: {recipe.cooking_time} minutes</p>
          <p>Servings: {recipe.servings}</p>
          <h2>Ingredients</h2>
          <ul className={styles['ingredients']}>
            {recipe.ingredients
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
        <div className={styles['button-container']}>
          <button onClick={() => handleDelete(recipe.id)}>Delete</button>
        </div>
      </div>
    </>
  )
}

export default SavedRecipeCard
