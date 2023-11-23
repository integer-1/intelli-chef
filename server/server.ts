import ingredientRoutes from './routes/ingredients.ts'
import recipesRoutes from './routes/recipes.ts'

import * as Path from 'node:path'
import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
config()

const apiChatKey = process.env.CHAT_API_KEY

const server = express()
server.use(express.json())
server.use(cors())

server.use('/api/v1/ingredients', ingredientRoutes)
server.use('/api/v1/recipes', recipesRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

//for connecting Chat GPT API
server.post('/completions', async (req, res) => {
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiChatKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'user', content: req.body.message }],
      max_tokens: 1000,
    }),
  }
  try {
    const response = await fetch(
      'https://api.openai.com/v1/chat/completions',
      options
    )
    const data = await response.json()
    console.log('OpenAI API Response:', data)
    res.send(data)
  } catch (error) {
    res.status(500).json({ message: 'Error communicating with OpenAI API' })
  }
})

export default server
