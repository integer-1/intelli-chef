import { useQuery } from '@tanstack/react-query'
import { getRecipes, getSavedRecipes } from '../apis/recipes'
import { Link } from 'react-router-dom'
import { ChefIcon } from './Icons'
import { useAuth0 } from '@auth0/auth0-react'

const MyRecipeList = () => {
  const { getAccessTokenSilently } = useAuth0()

  const fetchData = async () => {
    const token = await getAccessTokenSilently()
console.log('list' + token)
    const savedRecipesData = await Promise.all([getSavedRecipes({ token })])

    console.log(savedRecipesData)
    return { savedRecipes: savedRecipesData }
  }
  const {
    data: savedRecipes,
    isError,
    isLoading,
  } = useQuery(['savedRecipes'], fetchData)

  if (isError) {
    return (
      <>
        <p>Something went wrong!</p>
      </>
    )
  }

  if (!savedRecipes || isLoading) {
    return <p>...loading</p>
  }

  return (
    <div className="recipe-list">
      <h3>My Recipe List</h3>
        {savedRecipes.savedRecipes}

    </div>
  )
}

export default MyRecipeList
