/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated.tsx'
import { useLocation, useNavigate } from 'react-router-dom'
import RecipeViewer from '../ViewRecipe/RecipeViewer'
import SideBar from '../SideBar/SideBar'
import Header from '../Header/Header'
import { useRecipe } from '../../hooks/useRecipe.ts'

const RecipeCard = () => {
  const { user } = useAuth0()
  const { state } = useLocation()
  const navigate = useNavigate()

  const auth0Id = user?.sub

  

  const { addRecipeMutation } = useRecipe()

  // const handleSave = (id: number) => {
  //   addRecipeMutation.mutate()
  //   navigate('/')
  //   window.location.reload()
  // }

  
  return (
    <div>
      <Header />
      <SideBar />
      <h1>Recipe for {user?.nickname}</h1>
      <IfAuthenticated>
      {/* <div className={styles['button-container']}>
        <button onClick={() => handleSave(state.id)}>Save</button>
      </div> */}
      </IfAuthenticated>
      <IfNotAuthenticated>
        <p>You can save this recipe after login </p>
      </IfNotAuthenticated>
      <RecipeViewer recipe={state} />
    </div>
  )
}

export default RecipeCard
