import KitchenBuilder from './KitchenBuilder/KitchenBuilder'
import RecipeGenerator from './RecipeGenerator/RecipeGenerator'
import SideBar from './SideBar/SideBar'
import Header from './Header/Header'

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <section className="main">
        <div>
          <KitchenBuilder />
          <RecipeGenerator />
        </div>
      </section>
    </>
  )
}

export default App
