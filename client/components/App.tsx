import KitchenBuilder from './KitchenBuilder'
import RecipeGenerator from './RecipeGenerator'
import SideBar from './SideBar'

function App() {
  return (
    <>
      <header className="header">
        <h1>IntelliChef</h1>
      </header>
        <SideBar />
      <section className="main">
        <KitchenBuilder />
        <RecipeGenerator />
      </section>
    </>
  )
}

export default App
