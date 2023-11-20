import KitchenBuilder from './KitchenBuilder/KitchenBuilder'
import RecipeGenerator from './RecipeGenerator'
import SideBar from './SideBar'

function App() {
  return (
    <>
      <header className="header">
        <h1>intelliChef</h1>
      </header>
      <section className="main">
        <KitchenBuilder />
        <RecipeGenerator />
        <SideBar />
      </section>
    </>
  )
}

export default App
