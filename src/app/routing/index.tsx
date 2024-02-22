import { createBrowserRouter, Navigate } from 'react-router-dom'

import HomePage from '@/pages/home'
import LoginPage from '@/pages/login'

import PrivateRouter from '@/shared/ui/private-router'
import NotFoundPage from '@/pages/not-found'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PrivateRouter />,
        children: [
            {
                index: true,
                element: <HomePage />
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/404',
        element: <NotFoundPage />
    },
    {
        path: '*',
        element: <Navigate replace to='/404' />
    }
])


