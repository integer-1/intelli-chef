/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useLocation } from 'react-router-dom'

const RecipeCard = () => {
  const { state } = useLocation()

  return (
    <div>
      <h1>Recipe</h1>
      <h1>{state.dish_name}</h1>
      <p>Preparation Time: {state.preparation_time}</p>
      <p>Ingredients: {state.ingredients.join(', ')}</p>
      <p>Cooking time: {state.cooking_time}</p>
      <p>Preparing time: {state.servings}</p>
      <p>
        Method:
        <ol>
          {state.method.map(
            (
              step:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | null
                | undefined,
              index: React.Key | null | undefined
            ) => (
              <li key={index}>{step}</li>
            )
          )}
        </ol>
      </p>
    </div>
  )
}

export default RecipeCard
