import { ThemeProvider } from 'styled-components'
import { Container } from './components/styles/Container.styled'
import { GlobalStyles } from './components/styles/Global'
import Header from './components/Header'
import FormContainer from './components/FormContainer'
import TasksContainer from './components/TasksContainer'

import { useState, useEffect } from 'react'

import { app, auth } from './firebase'
import { getFirestore, collection, doc, getDocs, addDoc, deleteDoc, updateDoc } from 'firebase/firestore/lite'

 
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

  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [id, setId] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      
      try {
        const db = getFirestore(app)
        const data = await getDocs(collection(db,'Tasks'))
        
        const arrayData = data.docs.map(doc => (
          {
            id: doc.id,
            ...doc.data()
          }
        ))

        setTasks(arrayData)
      } catch(err) {
        console.log(err)
      }
    }

    getData()

  }, [])


  const addTask = async (e) => {
    e.preventDefault()

    if(!task.trim()) {
      console.log('This field is empty...')
      setError('You need to write something...')
      return
    }

    try {
      const db = getFirestore(app)
      const newTask = {
        name: task,
        date: Date.now()
      }

      const data = await addDoc(collection(db, 'Tasks'), newTask)

      setTasks([
        ...tasks,
        { ...newTask, id:data.id }
      ])
  
      setTask('')

    } catch (err) {
      console.log(err)
    }

    setError(null)
  }

  const deleteTask = async (id) => {

    try {
      const db = getFirestore(app)
      await deleteDoc(doc(db, 'Tasks', id))

      const arrayFiltered = tasks.filter((item) => item.id !== id)
  
      setTasks(arrayFiltered)
    } catch(err) {
      console.log(err)
    }
  }

  const edit = item => {
    setEditMode(true)
    setTask(item.name)
    setId(item.id)
    
  }

  const editTask = async (e) => {
    e.preventDefault()

    if(!task.trim()) {
      console.log('This field is empty...')
      setError('You need to write something...')
      return
    }

    try {
      const db = getFirestore(app)
      await updateDoc(doc(db, 'Tasks', id), {
        name: task
      })

      const arrayEdited = tasks.map( item => item.id === id ? //edit is taking the id of the task that we need to edit, being our reference.
        { id: id, date: item.date, name: task } : item
      )
  
      setTasks(arrayEdited)
      setTask('')
      setId('')
      setEditMode(false)
      setError(null)

    } catch(err) {
      console.log(err)
    }
  }





  return (
    <ThemeProvider theme = {theme}>
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <h2>Nickname - List</h2>
        <main>
          <TasksContainer
            task={task}
            tasks={tasks}
            deleteTask={deleteTask}
            editMode={editMode}
            edit={edit}
          />
          <FormContainer 
            task={task}
            setTask={setTask}
            addTask={addTask}
            editTask={editTask}
            editMode={editMode}
            error={error}
          />
        </main>
      </Container>
      {/* <Footer /> */}
    </>
    </ThemeProvider>
  )
}

export default App;
