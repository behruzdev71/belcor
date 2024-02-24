import { useNavigate } from "react-router-dom"
import { Box, Container, Flex, Title } from "@mantine/core"

import styles from './styles.module.scss'

const variants = Array(10).fill('')

const VariantsPage = () => {
  const navigate = useNavigate()

  return (
    <Container fluid>
      <Flex direction='column' rowGap='sm' my='lg'>
        {variants.map((_, idx) => (
          <Box key={idx} className={styles.variant} onClick={() => navigate(`/test/${idx + 1}`)}>
            <Title order={3}>{idx + 1} - вариант</Title>
          </Box>
        ))}
      </Flex>
    </Container>
  )
}

export default VariantsPage