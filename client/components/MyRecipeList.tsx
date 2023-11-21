import { useQuery } from '@tanstack/react-query'
import { getRecipes } from '../apis/recipes'
import { Link } from 'react-router-dom'
import { ChefIcon } from './Icons'
import { useAuth0 } from '@auth0/auth0-react'

interface UserProps {
  authId: string
}

const MyRecipeList: React.FC<UserProps> = ({ authId }) => {
  const {
    data: recipes,
    isError,
    isLoading,
  } = useQuery(['recipes'], getRecipes)

  const foundRecipe = recipes?.find((recipe) => recipe.auth0_id === authId)

  console.log(foundRecipe)

  if (isError) {
    return (
      <>
        <p>Something went wrong!</p>
      </>
    )
  }

  if (!foundRecipe || isLoading) {
    return <p>...loading</p>
  }

  return (
    <div className="recipe-list">
      <h3>My Recipe List</h3>
      <ul>
        <ChefIcon />
        {foundRecipe.dish_name}
        {/* {foundRecipe.map((recipe) => (
          <li key={recipe.id}>
            <ChefIcon />
            <Link to={`/RecipeCard/${recipe.id}`} className="recipe-link">
              {recipe.dish_name}
            </Link>
          </li>
        ))} */}
      </ul>
    </div>
  )
}

export default MyRecipeList
