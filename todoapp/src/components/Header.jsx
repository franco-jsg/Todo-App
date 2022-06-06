import { auth } from "../firebase"
import { StyledHeader, StyledNav, StyledLink, StyledNavLink } from "./styles/Header.styled"

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
                <h1>ToDo List</h1>
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
                            <button
                                onClick={() => logout()}
                            > 
                                Sign Out   
                            </button>
                        ) : (
                            <StyledNavLink to='login'>
                                <li>Login</li>
                            </StyledNavLink>
                        )
                    }

                </ul>
            </StyledNav>

        </StyledHeader>
    )
}

export default Header