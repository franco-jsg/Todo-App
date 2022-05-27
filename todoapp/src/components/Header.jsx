import { Container } from "./styles/Container.styled"
import { StyledHeader } from "./styles/Header.styled"

function Header() {

    return(
        <StyledHeader>
            <Container>
                <h1>ToDo List</h1>
            </Container>
        </StyledHeader>
    )
}

export default Header