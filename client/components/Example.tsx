import { useState, useEffect } from 'react'
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

function Example() {
  const [inputMessage, setInputMessage] = useState<string | null>(null)
  const [outputMessage, setOutputMessage] = useState<Message>(initialMessage)
  const [previousMessage, setPreviousMessage] = useState<Message[]>([])
  const [title, setTitle] = useState<string | null>(null)

  const {
    data: ingredients,
    isLoading,
    isError,
  } = useQuery(['ingredients'], getAllIngredients)

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isError) {
          // Handle error
          return
        }

        if (!ingredients || isLoading) {
          // Handle loading
          return
        }

        if (!title && outputMessage && inputMessage) {
          setTitle(inputMessage)
        }

        if (title && outputMessage && inputMessage) {
          setPreviousMessage((previousMessage) => [
            ...previousMessage,
            {
              title: title,
              role: 'user',
              content: inputMessage,
            },
            {
              title: title,
              role: outputMessage.role,
              content: outputMessage.content,
            },
          ])
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [outputMessage, title, inputMessage, isLoading, isError, ingredients])

  const getMessages = async () => {
    const ingredientsList =
      ingredients?.map((ingredient) => ingredient.item_name).join(', ') || ''
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

    try {
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
      {!title && <h1>ChatGPT</h1>}
      <ul>
        {ingredients?.map((ingredient) => (
          <li key={ingredient.id}>
            <p>{ingredient.item_name}</p>
          </li>
        ))}
      </ul>
      <div>
        <div>
          <p>
            <strong>My chat : </strong> {inputMessage}
          </p>
          <p>
            <strong>Chat GPT : </strong>
            {outputMessage.content}
          </p>
        </div>
        <div>
          <input
            type="text"
            id="chat-input"
            name="input"
            placeholder="Put your message..."
            value={inputMessage || ''}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button onClick={getMessages}>send</button>
        </div>
      </div>
    </div>
  )
}

export default Example
