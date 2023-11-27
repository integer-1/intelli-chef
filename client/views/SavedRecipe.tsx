import styles from './Recipe.module.css'
import Header from '../components/Header/Header'
import SideBar from '../components/SideBar/SideBar'
import SavedRecipeCard from '../components/ViewRecipe/SavedRecipeCard'

function SavedRecipe() {
  return (
    <>
      <Header />
      <SideBar />
      <div className={styles['recipe-view']}>
        <SavedRecipeCard />
      </div>
    </>
  )
}

export default SavedRecipe
