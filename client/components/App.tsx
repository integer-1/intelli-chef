import { getAllIngredients } from '../apis/ingredients'
import Example from './Example'
import { useQuery } from '@tanstack/react-query'

function App() {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <Example />
      </section>
    </>
  )
}

export default App
