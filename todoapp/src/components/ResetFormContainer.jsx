import { StyledFormContainer, StyledForm, StyledInput, StyledFormRecoveryPassButton } from './styles/FormContainer.styled'

function ResetFormContainer({email, setEmail, error, processData}) {
    return(
        <StyledFormContainer>
            <h2>
                Change Password
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
                <StyledFormRecoveryPassButton type="submit">
                    Reset password
                </StyledFormRecoveryPassButton>
            </StyledForm>
        </StyledFormContainer>
    )
}

export default ResetFormContainer