import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App.tsx'
import ReviewList from './components/ReviewList.tsx'
import MyKitchen from './components/MyKitchen.tsx'
import RecipeCard from './components/RecipeCard.tsx'
import SavedRecipeCard from './components/ViewRecipe/SavedRecipeCard.tsx'

export const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App />} />
    <Route path="/RecommendedRecipes" element={<ReviewList />} />
    <Route path="/MyKitchen" element={<MyKitchen />} />
    <Route path="/RecipeCard" element={<RecipeCard />} />
    <Route path="/SavedRecipeCard/:id" element={<SavedRecipeCard />} />
  </>
)

