import { useNavigate } from "react-router-dom"

export const useLogout = () => {
	const navigate = useNavigate()

	return () => {
		sessionStorage.removeItem('token')
		navigate('/login')
	}
}