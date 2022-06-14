import {StyledFormContainer, StyledForm, StyledInput, StyledFormAddButton, StyledFormRegisterButton, StyledFormRecoveryPassButton } from './styles/FormContainer.styled'

import { useNavigate } from 'react-router-dom'


function FormContainer ({email, setEmail, pass, setPass, error, isRegister, setIsRegister, processData }) {

    const navigate = useNavigate()
    
    return(
        <StyledFormContainer>
            <h2>
                {
                    isRegister ? 'Register' : 'Login'
                }

            </h2>
            <StyledForm onSubmit={processData}>
                {
                    error && (
                        <span>{error}</span>
                    )
                }
                <StyledInput 
                    type="email"
                    placeholder="Email"
                    onChange={ e => (setEmail(e.target.value))}
                    value={email}
                />
                <StyledInput 
                    type="password"
                    placeholder="Password"
                    onChange={ e => (setPass(e.target.value))}
                    value={pass}
                />
                <StyledFormAddButton type="submit">
                    {
                        isRegister ? 'Register' : 'Login'
                    }
                </StyledFormAddButton>

                {
                    !isRegister ? (
                        <StyledFormRecoveryPassButton
                            onClick={() => navigate('/reset')}
                        >
                            Recover password
                        </StyledFormRecoveryPassButton>
                    ) : null

                }

                <StyledFormRegisterButton
                    onClick={() => setIsRegister(!isRegister)}
                >
                    {
                        isRegister ? '¿Are you registered?' : '¿Need to register?'
                    }
                </StyledFormRegisterButton>
            </StyledForm>
        </StyledFormContainer>
    )
}

export default FormContainer