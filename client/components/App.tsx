import RecipeGenerator from './RecipeGenerator'
import { useQuery } from '@tanstack/react-query'
import SideBar from './SideBar'

function App() {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <RecipeGenerator />
        <SideBar/>
      </section>
    </>
  )
}

export default App
