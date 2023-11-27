import { useQuery } from '@tanstack/react-query'
import ErrorMessage from '../Error/ErrorMessage'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import { getRecipes } from '../../apis/recipes'
import { useAuth0 } from '@auth0/auth0-react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './ManageMyRecipes.module.css'
import { useRecipe } from '../../hooks/useRecipe'

const ManageMyRecipes = () => {
  const { user } = useAuth0()
  const { deleteRecipeMutation } = useRecipe()
  const navigate = useNavigate()

  const {
    data: recipes,
    isError,
    isLoading,
  } = useQuery(['recipes'], getRecipes)

  const foundRecipes = recipes?.filter(
    (recipe) => recipe.auth0_id === user?.sub
  )

  if (isError) {
    const message = `Sorry, We can't read your recipes`

    return (
      <>
        <ErrorMessage message={message} />
      </>
    )
  }

  if (!foundRecipes || isLoading) {
    return <p>...loading</p>
  }

  const handleDelete = (id: number) => {
    deleteRecipeMutation.mutate(id)
    navigate('/ManageMyRecipes')
    window.location.reload()
  }

  return (
    <div className={styles['manage-body']}>
      <Header />
      <SideBar />
      <div className={styles['manage-container']}>
        {foundRecipes.map((recipe) => (
          <div key={recipe.id} className={styles['manage-box']}>
            <p className={styles['dish-name']}>{recipe.dish_name}</p>
            <p style={{ fontSize: '17px' }}>Preparation Time:</p>
            <p>{recipe.preparation_time}</p>

            <p style={{ fontSize: '17px' }}>Ingredients:</p>
            <p>{recipe.ingredients}</p>

            <div className={styles['button-container']}>
              <Link
                to={`/SavedRecipeCard/${recipe.id}`}
                className={styles['view-button']}
                state={recipe}
              >
                Detail
              </Link>
              <button
                onClick={() => handleDelete(recipe.id)}
                className={styles['delete-button']}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ManageMyRecipes
