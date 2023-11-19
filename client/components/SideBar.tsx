import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import fridge from '../../svg/fridge.svg'
import FridgeIcon from './FridgeIcon'
import { Link } from 'react-router-dom'

const SideBar: React.FC = () => {
  const { loginWithRedirect, logout, user } = useAuth0()
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>

      <Link to='#' className = "navbar">
        <FridgeIcon />
      </Link>
      {/* <button onClick={toggleSidebar}> */}
      {/* </button> */}
      <h1>SideBar</h1>
      <div>
        <IfAuthenticated>
          <ul>
            <li>Menu Item 1</li>
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
        </IfNotAuthenticated>
      </div>
    </div>
  )
}

export default SideBar
