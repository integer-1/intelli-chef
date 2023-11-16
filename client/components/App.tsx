import { getAllIngredients } from '../apis/ingredients'
import KitchenBuilder from './KitchenBuilder'
import { useQuery } from '@tanstack/react-query'

function App() {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <KitchenBuilder />
      </section>
    </>
  )
}

export default App
