import AnecdoteList from "./components/AnecdoteList"
import AnecdoteForm from "./components/AnecdoteForm"
import Filter from "./components/Filter"
import Notification from "./components/Notification"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { initializeAnecdotes } from "./reducers/anecdoteReducer"

const App = () => {
const dispatch = useDispatch()

useEffect(() => {
  dispatch(initializeAnecdotes())
}, [])




  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
  
}

export default App