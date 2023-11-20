import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getRecipes } from '../apis/recipes'
import { Link } from 'react-router-dom'

const MyRecipeList = () => {
  const {
    data: recipes,
    isError,
    isLoading,
  } = useQuery(['recipes'], getRecipes)

  if (isError) {
    return (
      <>
        <p>Something went wrong!</p>
      </>
    )
  }

  if (!recipes || isLoading) {
    return <p>...loading</p>
  }

  return (
    <div className="recipe-list">
      <h4>MyRecipeList</h4>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/RecipeCard/${recipe.id}`}>{recipe.dish_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MyRecipeList
