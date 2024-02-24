import { createBrowserRouter, Navigate } from 'react-router-dom'

import VariantsPage from '@/pages/variants'
import LoginPage from '@/pages/login'
import TestsPage from '@/pages/questions'

import PrivateRouter from '@/shared/ui/private-router'
import NotFoundPage from '@/pages/not-found'
import ResultPage from '@/pages/result'
import UsersResults from '@/pages/users-result'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PrivateRouter />,
        children: [
            {
                index: true,
                element: <VariantsPage />
            },
            {
                path: 'test/:id',
                element: <TestsPage />
            },
            {
                path: 'result',
                element: <ResultPage />
            },
            {
                path: 'users-result',
                element: <UsersResults />
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


