import { useDispatch } from 'react-redux'
import { createAnecdotes } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'


const AnecdoteForm = () => {
    const dispatch = useDispatch()

  
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdotes(content))
    dispatch(notify(`You created ${content}`, 5))
 
  }
  
    return (
        <div>
        <form onSubmit={addAnecdote}>
          <div>
        <label htmlFor='anec'><h2>Create new</h2></label>
            <textarea 
            style={{width: '300px', height: '100px'}}
          name='anecdote'
          id='anec'
          />
          </div>
          <button type='submit'>Create</button>
        </form>
      </div>
    )
}

export default AnecdoteForm
