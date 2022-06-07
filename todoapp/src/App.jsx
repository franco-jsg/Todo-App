import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/styles/Global'
import Header from './components/Header'
import Admin from './components/Admin'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { auth } from './firebase'
import { Firestore } from 'firebase/firestore'
 
const theme = {

  colors: {
    color1: '#52b69a',
    color2: '#99d98c',
    color3: '#dee2e6',
    color4: '#212529',
    color5: '#f8f9fa',
    color6: '#006d77',
    color7: '#ffba08',
    color8: '#e63946',
    color9: '#bb3e03'

  },

  fontSize: {

  }

}

function App() {

  const [firebaseUser, setFirebaseUser] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user)
      if(user){
        setFirebaseUser(user)
      } else {
        setFirebaseUser(null)
      }
    })
  },[])

  return firebaseUser !== false ? (
    <Router>
      <ThemeProvider theme = {theme}>
        <GlobalStyles />
        <Header firebaseUser = {firebaseUser}/>
        <Routes>
          <Route path='/' element= {(
            <h1>Home</h1>
          )}/>

          <Route path='/login' element = {<Login />} />
          <Route path='/admin/*' element = {<Admin />} />
        </Routes>
        {/* <Footer /> */}

      </ThemeProvider>
    </Router>
  ) : (
    <p>Loading ...</p>
  )
}

export default App;
