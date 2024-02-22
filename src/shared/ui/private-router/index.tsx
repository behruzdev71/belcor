import { Outlet, useNavigate } from 'react-router-dom'

const PrivateRouter = () => {
    const navigate = useNavigate() 
    const token = localStorage.getItem('token')

    if(token) {
        navigate('/login')
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default PrivateRouter