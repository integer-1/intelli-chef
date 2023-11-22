import KitchenBuilder from './KitchenBuilder/KitchenBuilder'
import RecipeGenerator from './RecipeGenerator'
import SideBar from './SideBar/SideBar'
import Header from './Header/Header'

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <section className="main">
        <KitchenBuilder />
        <RecipeGenerator />
      </section>
    </>
  )
}

export default App
