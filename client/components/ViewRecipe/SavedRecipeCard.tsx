import { useLocation, useNavigate } from 'react-router-dom'
import { useRecipe } from '../../hooks/useRecipe'
import styles from './SavedRecipeCard.module.css'
import SideBar from '../SideBar/SideBar'
import Header from '../Header/Header'
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
    <>
      <Header />
      <SideBar />
      <RecipeViewer recipe={state} />
      <div className={styles['button-container']}>
        <button onClick={() => handleDelete(state.id)}>Delete</button>
      </div>
      <div style={{height : '3rem'}}></div>
    </>
  )
}

export default SavedRecipeCard
