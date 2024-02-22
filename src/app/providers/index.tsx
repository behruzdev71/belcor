import '@mantine/core/styles.css';

import MantineProvider from './mantine'
import RouterProvider from './router'

const Providers = () => {
    return (
        <MantineProvider>
            <RouterProvider />
        </MantineProvider>
    )
}

export default Providers