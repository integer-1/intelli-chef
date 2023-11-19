import React, { ReactNode, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import FridgeIcon from './FridgeIcon'
import PlusIcon from './PlusIcon'
import RecipesIcon from './RecipesIcon'
import { NavLink } from 'react-router-dom'

interface SideBarProps {
  children: ReactNode
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  const { loginWithRedirect, logout, user } = useAuth0()

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const menuItem = [
    { path: '/', name: 'Home', icon: <FridgeIcon /> },
    { path: '/RecipeCard', name: 'RecipeCard', icon: <RecipesIcon /> },
    { path: '/MyKitchen', name: 'MyKitchen', icon: <RecipesIcon /> },
  ]

  return (
    <div className="sidebar-container">
      <div style={{ width: isOpen ? '300px' : '50px' }} className="sidebar">
        <div className="top_section">
          <h1 style={{ width: isOpen ? 'block' : 'none' }} className="logo">
            logo
          </h1>
          <div
            style={{ marginLeft: isOpen ? '300px' : '0px' }}
            className="bars"
            onClick={toggle}
          >
            <PlusIcon />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={(isActive) => 'link' + (!isActive ? 'active' : 'link')}
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  )
}

export default SideBar
{
  /* <IfAuthenticated>
            <ul>
              <li>
              </li>
              <li>Menu Item 2</li>
              <li>Menu Item 3</li>
            </ul>
            <p className="authentication">{user?.nickname}</p>
            <button className="button" onClick={() => logout()}>
              Logout
            </button>
          </IfAuthenticated>
          <IfNotAuthenticated>
            <button className="button" onClick={() => loginWithRedirect()}>
              Login
            </button>
          </IfNotAuthenticated> */
}
