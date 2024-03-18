import { Navigate, Outlet } from "react-router-dom"
import { useAuthStatus } from '../Hooks/useAuthStatus'
import Spinner from "./Spinner"

const PrivateRoute = () => {

const {loggedIn, checkingStatus} = useAuthStatus()

if(checkingStatus)
{
    return <Spinner />
}

  return loggedIn ? <Outlet/> : <Navigate to='/sign-in'/>
}

export default PrivateRoute
