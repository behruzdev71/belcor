import { Button, Container } from "@mantine/core"

import { UsersResultTable } from "@/widgets/users-result-table"
import { useNavigate } from "react-router-dom"

const UsersResult = () => {
    const navigate = useNavigate()
    return (
        <Container fluid>
            <UsersResultTable />
            <Button onClick={() => navigate('/')}>Домой</Button>
        </Container>
    )
}

export default UsersResult