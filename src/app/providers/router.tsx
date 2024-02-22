import { PropsWithChildren } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from '../routing'

const Provider = ({ children }: PropsWithChildren) => {
    return (
        <>
            <RouterProvider router={router} />
            {children}
        </>
    )
}

export default Provider