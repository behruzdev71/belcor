import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
    const token = sessionStorage.getItem('token')

    if (!token) {
        return <Navigate to='/login' />
    }

    return <Outlet />
}

export default PrivateRouter