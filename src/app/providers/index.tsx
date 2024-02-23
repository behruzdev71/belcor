import '@mantine/core/styles.css';

import MantineProvider from './mantine'
import RouterProvider from './router'
import ToastifyProvider from './toastify'
import ReactQueryProvider from './react-query'
import ReduxToolkitProvider from './redux-toolkit'

const Providers = () => {
    return (
        <ReactQueryProvider>
            <ReduxToolkitProvider>
                <MantineProvider>
                    <ToastifyProvider>
                        <RouterProvider />
                    </ToastifyProvider>
                </MantineProvider>
            </ReduxToolkitProvider>
        </ReactQueryProvider>
    )
}

export default Providers