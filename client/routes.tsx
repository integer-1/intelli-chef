import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App.tsx'
import ReviewList from './components/ReviewList.tsx'
import Recipe from './views/Recipe.tsx'
import SavedRecipe from './views/SavedRecipe.tsx'
import RecipeGenerator from './components/RecipeGenerator/RecipeGenerator.tsx'
import ManageMyRecipes from './components/ManageMyRecipes/ManageMyRecipes.tsx'

export const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App />} />
    <Route path="/RecommendedRecipes" element={<ReviewList />} />
    <Route path="/ManageMyRecipes" element={<ManageMyRecipes />} />
    <Route path="/recipe" element={<Recipe />} />
    <Route path="/" element={<RecipeGenerator />} />
    <Route path="/SavedRecipeCard/:id" element={<SavedRecipe />} />
  </>
)
