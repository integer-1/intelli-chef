import { useLocation, useNavigate } from 'react-router-dom'
import { useRecipe } from '../../hooks/useRecipe'
import styles from './RecipeViewer.module.css'
import RecipeViewer from './RecipeViewer'

const SavedRecipeCard = () => {
  const { deleteRecipeMutation } = useRecipe()
  const { state } = useLocation()
  const navigate = useNavigate()

  const handleDelete = (id: number) => {
    deleteRecipeMutation.mutate(id)
    navigate('/')
    window.location.reload()
  }

  return (
    <div>
      <RecipeViewer recipe={state} />
      <div className={styles['recipe-nav']}>
        <div className={styles['button-container']}>
          <button onClick={() => handleDelete(state.id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default SavedRecipeCard
