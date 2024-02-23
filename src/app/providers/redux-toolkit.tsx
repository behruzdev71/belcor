import { userSlice } from '@/entities/user/model/store'
import { configureStore } from '@reduxjs/toolkit'
import { PropsWithChildren } from 'react'
import { Provider as ReduxProvider } from 'react-redux'

const store = configureStore({
    reducer: {
        user: userSlice.reducer
    },
    devTools: true
})

const Provider = ({ children }: PropsWithChildren) => {
    return (
        <ReduxProvider store={store}>
            {children}
        </ReduxProvider>
    )
}

export default Provider