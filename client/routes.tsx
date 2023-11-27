import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App.tsx'
import Recipe from './views/Recipe.tsx'
import SavedRecipe from './views/SavedRecipe.tsx'
import ManageMyRecipes from './components/ManageMyRecipes/ManageMyRecipes.tsx'

export const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App />} />
    <Route path="/ManageMyRecipes" element={<ManageMyRecipes />} />
    <Route path="/recipe" element={<Recipe />} />
    <Route path="/SavedRecipeCard/:id" element={<SavedRecipe />} />
  </>
)
