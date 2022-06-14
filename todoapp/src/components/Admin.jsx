import { useState, useEffect } from 'react'
import { auth } from '../firebase'

import { useNavigate } from 'react-router-dom'

import Firestore from './Firestore'

function Admin() {

    const navigate = useNavigate()

    const [user, setUser] = useState(null)

    useEffect(() => {
        if(auth.currentUser) {
            console.log('This user exists')
            setUser(auth.currentUser)
        } else {
            console.log('This user doesnt exists')
            navigate('/login')
        }
    }, [navigate])

    return(
        <>
            {
                user && (
                    <Firestore user={user}/>
         
                )
            }
        </>
    )
}

export default Admin