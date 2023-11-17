import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

const SideBar = () => {
  const { loginWithRedirect, logout, user } = useAuth0()

  return (
    <div>
      <h1>SideBar</h1>

      <div>
        <IfAuthenticated>
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
