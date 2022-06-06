import {StyledFormContainer, StyledForm, StyledInput, StyledFormAddButton, StyledFormRegisterButton } from './styles/FormContainer.styled'


function LoginFormContainer ({email, setEmail, pass, setPass, error, isRegister, setIsRegister, processData }) {
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

export default LoginFormContainer