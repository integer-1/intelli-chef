import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated.tsx'
import { NavLink } from 'react-router-dom'
import MyRecipeList from './MyRecipeList.tsx'

import styles from './SideBar.module.css'

import {
  FridgeIcon,
  RecipesIcon,
  XIcon,
  MenuBar,
  KitchenIcon,
} from '../Icons.tsx'

const SideBar = () => {
  const { loginWithRedirect, logout, user } = useAuth0()
  const [isOpen, setIsOpen] = useState(false)
  const openSidebar = () => setIsOpen(true)
  const closeSidebar = () => setIsOpen(false)

  const menuItem = [
    { path: '/', name: 'Home', icon: <FridgeIcon /> },
    {
      path: '/ManageMyRecipes',
      name: 'Manage My Recipes',
      icon: <RecipesIcon />,
    },
    { path: '/', name: 'Recipe Generator', icon: <KitchenIcon /> },
  ]

  return (
    <div className={styles['sidebar-container']}>
      <div
        style={{ width: isOpen ? '250px' : '60px' }}
        className={styles['sidebar']}
      >
        <div className={styles['top_section']}>
          <div
            style={{ marginLeft: isOpen ? '-10px' : '-10px' }}
            className={styles['bars']}
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
          <h1
            className={styles['authentication']}
            style={{ display: isOpen ? 'block' : 'none' }}
          >
            {user?.nickname}`s recipes
          </h1>

          {menuItem.map((item, index) => (
            <div key={index}>
              <NavLink
                to={item.path}
                className={styles[`link${isOpen ? '' : '-close'}`]}
                key={index}
              >
                <div className={styles['icon']}>{item.icon}</div>
                <div
                  style={{ display: isOpen ? 'block' : 'none' }}
                  className={styles['link_text']}
                >
                  {item.name}
                </div>
              </NavLink>
            </div>
          ))}

          <div style={{ display: isOpen ? 'block' : 'none' }}>
            <MyRecipeList authId={user?.sub || ''} />

            <button className={styles['login-button']} onClick={() => logout()}>
              Logout
            </button>
          </div>
        </IfAuthenticated>

        <IfNotAuthenticated>
          <h1 className={styles['welcome']}>Welcome Guest</h1>
          <p
            className={styles['authentication']}
            style={{ display: isOpen ? 'block' : 'none' }}
          >
            Please log in here
          </p>
          <button
            className={styles['login-button']}
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        </IfNotAuthenticated>
      </div>
    </div>
  )
}

export default SideBar
