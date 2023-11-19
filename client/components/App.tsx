import { getAllIngredients } from '../apis/ingredients'
import KitchenBuilder from './KitchenBuilder'
import RecipeGenerator from './RecipeGenerator'
import { useQuery } from '@tanstack/react-query'
import SideBar from './SideBar'

function App() {
  return (
    <>
      <header className="header">
        <h1>IntelliChef</h1>
      </header>
        <SideBar/>
      <section className="main">
        <KitchenBuilder />
        <RecipeGenerator />
      </section>
    </>
  )
}

export default App
