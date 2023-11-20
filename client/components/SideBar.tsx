import React, { ReactNode, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import {
  FridgeIcon,
  PlusIcon,
  RecipesIcon,
  XIcon,
  BackIcon,
  MenuBar,
  ChefIcon,
  KitchenIcon,
} from './Icons.tsx'
import { NavLink } from 'react-router-dom'
import MyRecipeList from './MyRecipeList.tsx'

interface SideBarProps {
  children: ReactNode
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  const { loginWithRedirect, logout, user } = useAuth0()

  const [isOpen, setIsOpen] = useState(false)

  const openSidebar = () => setIsOpen(true)
  const closeSidebar = () => setIsOpen(false)

  const menuItem = [
    { path: '/', name: 'Home', icon: <FridgeIcon /> },
    { path: '/MyKitchen', name: 'My Kitchen', icon: <KitchenIcon /> },
    { path: '/RecipeCard', name: 'My Recipe Card', icon: <RecipesIcon /> },
  ]

  return (
    <div className="sidebar-container">
      <div style={{ width: isOpen ? '250px' : '60px' }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">
            IntelliChef
          </h1>
          <div
            style={{ marginLeft: isOpen ? '60px' : '-10px' }}
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
          {menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link">
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
            <MyRecipeList />
          </div>

          <p className="authentication">Hi , {user?.nickname}</p>
          <button className="button" onClick={() => logout()}>
            Logout
          </button>
        </IfAuthenticated>

        <IfNotAuthenticated>
          <p>Please login</p>
          <button className="button" onClick={() => loginWithRedirect()}>
            Login
          </button>
        </IfNotAuthenticated>
      </div>
      <main>{children}</main>
    </div>
  )
}

export default SideBar
