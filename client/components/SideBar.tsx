import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { NavLink } from 'react-router-dom'
import MyRecipeList from './MyRecipeList.tsx'

import {
  FridgeIcon,
  RecipesIcon,
  XIcon,
  MenuBar,
  KitchenIcon,
} from './Icons.tsx'

const SideBar = () => {
  const { loginWithRedirect, logout, user } = useAuth0()
  const [isOpen, setIsOpen] = useState(false)
  const openSidebar = () => setIsOpen(true)
  const closeSidebar = () => setIsOpen(false)

  const auth0Id = user?.sub
  if (!auth0Id) return null

  const menuItem = [
    { path: '/', name: 'Home', icon: <FridgeIcon /> },
    { path: '/MyKitchen', name: 'My Kitchen', icon: <KitchenIcon /> },
    { path: '/RecipeCard', name: 'My Recipe Card', icon: <RecipesIcon /> },
  ]

  return (
    <div className="sidebar-container">
      <div style={{ width: isOpen ? '250px' : '60px' }} className="sidebar">
        <div className="top_section">
          <div
            style={{ marginLeft: isOpen ? '-10px' : '-10px' }}
            className="bars"
            onClick={isOpen ? closeSidebar : openSidebar}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === 'Space') {
                isOpen ? closeSidebar() : openSidebar()
              }
            }}
            role="button"
            tabIndex={0}
          >
            {isOpen ? <XIcon /> : <MenuBar />}
          </div>
        </div>

        <IfAuthenticated>
          <p
            className="authentication"
            style={{ display: isOpen ? 'block' : 'none' }}
          >
            {user?.nickname}`s recipe
          </p>

          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={`link${isOpen ? '' : '-close'}`}
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? 'block' : 'none' }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
          <div style={{ display: isOpen ? 'block' : 'none' }}>
            <MyRecipeList authId={auth0Id} />

            <button className="login-button" onClick={() => logout()}>
              Logout
            </button>
          </div>
        </IfAuthenticated>

        <IfNotAuthenticated>
          <button className="login-button" onClick={() => loginWithRedirect()}>
            Login
          </button>
        </IfNotAuthenticated>
      </div>
    </div>
  )
}

export default SideBar
