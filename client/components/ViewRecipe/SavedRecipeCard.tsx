import { useLocation, useNavigate } from 'react-router-dom'
import { useRecipe } from '../../hooks/useRecipe'
import styles from './SavedRecipeCard.module.css'
import SideBar from '../SideBar/SideBar'
import Header from '../Header/Header'

const SavedRecipeCard = () => {
  const { deleteRecipeMutation } = useRecipe()
  const { state } = useLocation()
  const navigate = useNavigate()

  const handleDelete = (id: number) => {
    deleteRecipeMutation.mutate(id)
    navigate('/')
    window.location.reload()
  }

  const methodSteps: string[] = state.method
    .split('\n')
    .map((step: string) => step.trim())
    .filter((step: string) => step)

  return (
    <>
      <Header />
      <SideBar />
      <div className={styles['recipe-container']}>
        <div className={styles['recipe']}>
          <p className={styles['dish-name']}>{state.dish_name}</p>
          <p>Preparation Time: {state.preparation_time} minutes</p>
          <p>Cooking Time: {state.cooking_time} minutes</p>
          <p>Servings: {state.servings}</p>
          <h2>Ingredients</h2>
          <ul className={styles['ingredients']}>
            {state.ingredients
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
          <button onClick={() => handleDelete(state.id)}>Delete</button>
        </div>
      </div>
    </>
  )
}

export default SavedRecipeCard
