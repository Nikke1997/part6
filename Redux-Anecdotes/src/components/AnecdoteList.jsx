import { useSelector, useDispatch } from 'react-redux'
import { votedAnecdote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'


const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
      if (state.filterr === '') {
        return state.anecdotes
      }
      return state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filterr))
    })
    
    const dispatch = useDispatch()

    console.log(anecdotes)
      
  const addVote = (anecdote) => {
    dispatch(votedAnecdote(anecdote.id, anecdote))
    dispatch(notify(`You voted for ${anecdote.content}` , 5))
  }


  return (
    <div>
        {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => addVote(anecdote)}>vote</button>
            </div>
            <br />
          </div>
        )}
    </div>
  )
}

export default AnecdoteList
