import { getAllIngredients } from '../apis/ingredients'
import KitchenBuilder from './KitchenBuilder'
import { useQuery } from '@tanstack/react-query'
import SideBar from './SideBar'

function App() {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <KitchenBuilder />
        <SideBar/>
      </section>
    </>
  )
}

export default App
