import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoutes() {
    const {auth} = useContext(AuthContext)
    const token = {'token': auth}
  return (
    token.token ? <Outlet/> : <Navigate to='/login' />
  )
}

export default ProtectedRoutes