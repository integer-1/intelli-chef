import React from 'react'
import { useLocation } from 'react-router-dom'

const RecipeCard = (props: any) => {
  const { state } = useLocation()

  return (
    <div>
      <h1>Recipe</h1>
      <h1>Dish:{state}</h1>
    </div>
  )
}

export default RecipeCard
