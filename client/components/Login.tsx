import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Login() {
  const { loginWithRedirect, logout } = useAuth0()

  return (
    <>
      <IfAuthenticated>
        <button className="button" onClick={() => logout()}>
          Logout
        </button>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <button className="button" onClick={() => loginWithRedirect()}>
          Login
        </button>
      </IfNotAuthenticated>
    </>
  )
}

export default Login