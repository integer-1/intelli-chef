import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addIngredient, updateIngredient } from '../apis/ingredients'
import { deleteIngredient } from '../apis/ingredients'

export function useIngredients() {
  const queryClient = useQueryClient()

  const updateIngredientMutation = useMutation(updateIngredient, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['ingredients'])
    },
  })

  const deleteIngredientMutation = useMutation(deleteIngredient, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['ingredients'])
    },
  })

  const addIngredientMutation = useMutation(addIngredient, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['ingredients'])
    },
  })

  return {
    updateIngredientMutation,
    deleteIngredientMutation,
    addIngredientMutation,
  }
}
