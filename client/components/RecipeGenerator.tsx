import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllIngredients } from '../apis/ingredients'

interface Message {
  role: string
  content: string
}

const initialMessage: Message = {
  role: 'chatGPT',
  content: '',
}

function RecipeGenerator() {
  const [outputMessage, setOutputMessage] = useState<Message>(initialMessage)

  const {
    data: ingredients,
    isLoading,
    isError,
  } = useQuery(['ingredients'], getAllIngredients)

  const fetchData = async () => {
    try {
      if (isLoading) {
        return <p>Loading...</p>
      }

      if (isError) {
        return <p>Error retrieving data!</p>
      }

      const ingredientsList = ingredients
        .map((ingredient) => ingredient.item_name)
        .join(', ')
      const prompt = `Please return a list of recipes using only these ingredients: ${ingredientsList}. The recipes don't need to use all of these ingredients. Please don't provide any additional text.`

      const options = {
        method: 'POST',
        body: JSON.stringify({
          message: prompt,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const response = await fetch('http://localhost:3000/completions', options)

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`)
      }

      const data = await response.json()
      setOutputMessage(data.choices[0].message)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <div>
        <p>
          <strong>Chat GPT : </strong>
          {outputMessage.content}
        </p>
      </div>
      <button onClick={fetchData}>Generate Recipes</button>
    </div>
  )
}

export default RecipeGenerator
