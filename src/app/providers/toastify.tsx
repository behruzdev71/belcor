import { PropsWithChildren } from 'react'
import { ToastContainer } from 'react-toastify'

const Provider = ({ children }: PropsWithChildren) => {
    return (
        <>
            <ToastContainer limit={2} position="bottom-right" />
            {children}
        </>
    )
}

export default Provider