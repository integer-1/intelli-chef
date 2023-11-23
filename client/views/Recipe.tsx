import RecipeCard from '../components/RecipeGenerator/RecipeCard'
import styles from './Recipe.module.css'
import Header from '../components/Header/Header'
import SideBar from '../components/SideBar/SideBar'

function Recipe() {
  return (
    <>
      <Header />
      <SideBar />
      <div className={styles['recipe-view']}>
        <RecipeCard />
      </div>
    </>
  )
}

export default Recipe
