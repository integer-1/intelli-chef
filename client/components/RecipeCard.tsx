import React from 'react'
import { useLocation } from 'react-router-dom'

const RecipeCard = (props: any) => {
  const { state } = useLocation()

  return (
    <div>
      <h1>Recipe</h1>
      <h2>Dish: {state.dish_name}</h2>
      {/* <p>{state.method}</p>
      <p>{state.ingredients}</p>
      <p>{state.preparation_timed}</p>
      <p>{state.cooking_time}</p>
      <p>{state.servings}</p>
      <p>{state.method}</p> */}
    </div>
  )
}

export default RecipeCard
