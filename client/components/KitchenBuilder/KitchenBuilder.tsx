import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllIngredients } from '../../apis/ingredients'
import { Ingredient, IngredientData } from '../../../models/ingredients'
import { useIngredient } from '../../hooks/useIngredient'

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
        setSearchInput('')
        await addIngredientMutation.mutateAsync(newIngredient)
        const updatedIngredients = await getAllIngredients()
        setSelectedIngredients([...updatedIngredients])
      } catch (e) {
        console.error('Error adding ingredient:', e)
      }
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddToKitchen()
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
    <div className={styles['kitchen-builder-wrapper']}>
      <div className={styles['kitchen-builder']}>
        <h2>What's in my Kitchen?</h2>
        <input
          type="text"
          placeholder="Add ingredient..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div>
          <div className={styles['kitchen-box']}>
            <div className={styles['kitchen-items']}>
              {selectedIngredients.map((ingredient, index) => (
                <div className={styles['item-box']} key={index}>
                  {ingredient.item_name}
                  <button onClick={() => handleDeleteFromKitchen(ingredient)}>
                    <div className={styles['img-wrapper']}>
                      <img src="/svg/x.svg" alt="delete button"></img>
                    </div>
                  </button>
                </div>
              ))}
              {searchInput && (
                <div className={styles['item-box']}>{searchInput}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KitchenBuilder
