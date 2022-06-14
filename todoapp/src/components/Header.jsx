import { auth } from "../firebase"
import { StyledHeader, StyledNav, StyledLink, StyledNavLink, StyledSignOutButton } from "./styles/Header.styled"

import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'

function Header({firebaseUser}) {

    const navigate = useNavigate()

    const logout = () => {
        signOut(auth)
        
        .then(() => {
            navigate('/login')
        })

    }

    return(
        <StyledHeader>
            <StyledLink to='/'>
                <h1>ToDo App</h1>
            </StyledLink>
            <StyledNav>
                <ul>
                    <StyledNavLink to='/' exact>
                        <li>Home</li>
                    </StyledNavLink>
                    {
                        firebaseUser !== null ? (
                            <StyledNavLink to='/admin'>
                                <li>Admin</li>
                            </StyledNavLink>
                        ) : null
                    }
                    {
                        firebaseUser !== null ? (
                            <StyledSignOutButton
                                onClick={() => logout()}
                            > 
                                Sign Out   
                            </StyledSignOutButton>
                        ) : (
                            <StyledNavLink to='login'>
                                <li>Login/Register</li>
                            </StyledNavLink>
                        )
                    }

                </ul>
            </StyledNav>

        </StyledHeader>
    )
}

export default Header