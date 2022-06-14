import ResetFormContainer from "./ResetFormContainer"
import { Container } from "./styles/Container.styled"
import { auth } from "../firebase"

import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { sendPasswordResetEmail } from "firebase/auth"

function Reset() {

    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const processData = e => {
        e.preventDefault()

        if(!email.trim()) {
            setError('Enter Email')
            return
        }

        setError(null)

        console.log('All validations are ok')

        recover()
    }

    const recover = useCallback( async() => {

        try{
            await sendPasswordResetEmail(auth, email)
            console.log('Email send!')

            navigate('/login')

        } catch(error){
            console.log(error)
            setError(error.message)
        }
    }, [email, navigate])

    return(
        <Container>
            <ResetFormContainer 
                email={email}
                setEmail={setEmail}
                error={error}
                processData={processData}
            />
        </Container>
    )
}

export default Reset