import clientApi from "@/shared/api/base-api"

export const getMeApi = async () => {
    const token = sessionStorage.getItem('token')
    const response = await clientApi.get('/auth/me', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return response.data
}