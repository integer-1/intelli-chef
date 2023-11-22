import { useQuery } from '@tanstack/react-query'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getRecipeById } from '../../apis/recipes'
import { useRecipe } from '../../hooks/useRecipe'
import styles from './SavedRecipeCard.module.css'
import SideBar from '../SideBar/SideBar'

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
      <div className={styles['recipe-view']}>
        <SideBar />
        <div className={styles['recipe-header']}>
          <h1>{recipe.dish_name}</h1>
          <div className={styles['buttons']}>
            <div className={styles['button-wrapper']}>
              {/* <hr></hr> */}
              {/* <Link
                  to={`/SavedRecipeCard/${recipe.id}/update`}
                  state={{ recipeState: recipe }}
                >
                  <button>Update</button>
                </Link> */}
            </div>
            <div className={styles['button-wrapper']}>
              <button onClick={() => handleDelete(recipe.id)}>Delete</button>
            </div>
          </div>
        </div>
        <hr></hr>
        <p>
          <b>Preparation Time: </b>
          {recipe.preparation_time} minutes
        </p>
        <p>
          <b>Cooking Time: </b>
          {recipe.cooking_time} minutes
        </p>
        <p>
          <b>Servings: </b>
          {recipe.servings}
        </p>
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients
            .split('\n')
            .map((ingredient: string, index: number) => (
              <li key={index}>{ingredient}</li>
            ))}
        </ul>
        <h2>Method</h2>
        <ol>
          {methodSteps.map((step, index) => (
            <li key={index}>{step.replace(/^\d+\.\s/, '')}</li>
          ))}
        </ol>
      </div>
    </>
  )
}

export default SavedRecipeCard
