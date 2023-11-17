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
      const prompt = `From now you when you respond you will only provide a codeblock with json and nothing else. You will consider this list of ingredients: ${ingredientsList} and provide a maximum of 3 recipes containing ONLY the ingredients specific and absolutely no additional ingredients. The json will have the following properties: dish_name, preparation_time, cooking_time, servings, ingredients and method. Remember you must provide only a codeblock containing json, absolutely no additional text.`

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
      if (data.choices && data.choices.length > 0) {
        setOutputMessage(data.choices[0].message)
      } else {
        console.error('No choices found in the response.')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <h2>Recipe Generator</h2>
      <button onClick={fetchData}>Generate Recipes</button>
      <div>
        <strong>Chat GPT : </strong>
        <p>{outputMessage.content}</p>
      </div>
    </div>
  )
}

export default RecipeGenerator
