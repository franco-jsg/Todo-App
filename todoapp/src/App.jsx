import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/styles/Global'
import Header from './components/Header'
import Firestore from './components/Firestore'
 
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

  return (
    <ThemeProvider theme = {theme}>
    <>
      <GlobalStyles />
      <Header />
      <Firestore />
      {/* <Footer /> */}
    </>
    </ThemeProvider>
  )
}

export default App;
