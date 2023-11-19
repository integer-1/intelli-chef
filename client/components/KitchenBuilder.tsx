import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllIngredients } from '../apis/ingredients'
import { Ingredient, IngredientData } from '../../models/ingredients'
import { useIngredient } from '../hooks/useIngredients'

import styles from './KitchenBuilder.module.css'

function KitchenBuilder() {
  const {
    data: ingredients,
    isLoading,
    isError,
  } = useQuery(['ingredients'], getAllIngredients)

  const { addIngredientMutation, deleteIngredientMutation } = useIngredient()
  const [searchInput, setSearchInput] = useState('')
  const [selectedIngredients, setSelectedIngredients] = useState(
    ingredients || []
  )

  useEffect(() => {
    // Set selectedIngredients initially to ingredients from seeds
    if (ingredients) {
      setSelectedIngredients([...ingredients])
    }
  }, [ingredients])

  /* HANDLE ADD/DELETE
String from search gets turned into Ingredient object and added to
database as soon as added to ingredients list. This could be faster
or slower than converting string array and adding whole list on
submit. If it is slow for the user, consider testing alternative
approach. - jayde */

  const handleAddToKitchen = async () => {
    if (searchInput.trim() !== '') {
      try {
        const newIngredient: IngredientData = {
          item_name: searchInput,
        }
        await addIngredientMutation.mutateAsync(newIngredient)
        const updatedIngredients = await getAllIngredients()
        setSelectedIngredients([...updatedIngredients])
        setSearchInput('')
      } catch (e) {
        console.error('Error adding ingredient:', e)
      }
    }
  }

  const handleDeleteFromKitchen = async (ingredient: Ingredient) => {
    try {
      await deleteIngredientMutation.mutateAsync(ingredient.id)
      const updatedIngredients = await getAllIngredients()
      setSelectedIngredients([...updatedIngredients])
    } catch (error) {
      console.error('Error deleting ingredient:', error)
    }
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error retrieving data!</p>
  }

  return (
    <div>
      <h2>Kitchen Builder</h2>
      <input
        type="text"
        placeholder="Add ingredient..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={handleAddToKitchen}>Add to Kitchen</button>
      <div>
        <h3>Kitchen</h3>
        <ul>
          {selectedIngredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.item_name}
              <button onClick={() => handleDeleteFromKitchen(ingredient)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default KitchenBuilder
