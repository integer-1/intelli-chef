import { useState, useEffect } from 'react'

interface Message {
  // title: string
  role: string
  content: string
}

const initialMessage = {
  role: 'chatGPT',
  content: '',
}

function Example() {
  const [inputMessage, setInputMessage] = useState<string | null>(null)
  const [outputMessage, setOutputMessage] = useState<Message>(initialMessage)
  const [previousMessage, setPreviousMessage] = useState<Message[]>([])
  const [title, setTitle] = useState<string | null>(null)

  const getMessages = async () => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: inputMessage,
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

  useEffect(() => {
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
  }, [outputMessage, title, inputMessage])

  return (
    <div>
      {!title && <h1>ChatGPT</h1>}
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
