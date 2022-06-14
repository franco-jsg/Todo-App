import FormContainer from "./FormContainer"
import { Container } from "./styles/Container.styled"

import {auth, app} from '../firebase'

import {useState, useCallback} from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc, getFirestore, collection, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'


function Login() {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState(null)
    const [isRegister, setIsRegister] = useState(true)

    const navigate = useNavigate()

    const processData = e => {
        e.preventDefault()

        if(!email.trim()) {
            setError('Enter Email')
            return
        }

        if(!pass.trim()) {
            setError('Enter Password')
            return
        }

        if(pass.length<6) {
            setError('Password needs more than 6 characters')
            return
        }

        setError(null)

        console.log('All validations are ok')

        if(isRegister) {
            register()
        } else {
            login()
        }
    }

    const register = useCallback( async() => {

        console.log('ok!')

        try{
            const res = await createUserWithEmailAndPassword(auth, email, pass)
            console.log(res.user)

            const db = getFirestore(app)

            await setDoc(doc(db, 'users', res.user.email), {
                email: res.user.email,
                uid: res.user.uid
            })

            await addDoc(collection(db, res.user.uid), {
                name: 'Example task',
                date: Date.now()
            })

            setEmail('')
            setPass('')
            setError(null)

            navigate('/admin')

        } catch(error) {
            console.log(error)
            if(error.code === 'auth/invalid-email') {
                setError('Invalid Email')
            }
            if(error.code === 'auth/email-already-in-use') {
                setError('Email already in use')
            }
        }

    }, [email, pass, navigate])

    const login = useCallback( async() => {
        console.log('login ok!')

        try {
             await signInWithEmailAndPassword(auth, email, pass)

            setEmail('')
            setPass('')
            setError(null)

            navigate('/admin')

        } catch(error) {
            console.log(error)
            if(error.code === 'auth/user-not-found'){
                setError('Invalid Email')
            }
            if(error.code === 'auth/wrong-password'){
                setError('Wrong password')
            }
        }
    }, [email, pass, navigate])


    return(
        <Container>
            <FormContainer 
                email={email}
                setEmail={setEmail}
                pass={pass}
                setPass={setPass}
                error={error}
                isRegister={isRegister}
                setIsRegister={setIsRegister}
                processData={processData}
            />
        </Container>
    )
}

export default Login