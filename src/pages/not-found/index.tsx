import { useNavigate } from 'react-router-dom'
import { Button } from '@mantine/core'

import styles from './styles.module.scss'

const NotFoundPage = () => {
    const navigate = useNavigate()
    const handleReturn = () => {
        navigate(-1)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>404 Page Not Found</div>
            <Button color='cyan' onClick={handleReturn}>Return Back</Button>
        </div>
    )
}

export default NotFoundPage