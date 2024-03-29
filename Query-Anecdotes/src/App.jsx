import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useMutation, useQueryClient} from '@tanstack/react-query'
import { getAll, updateAnecdote} from './services/anecdotes'
import { useNotifyDispatch } from './NotifyContext'

const App = () => {

  const queryClient = useQueryClient()

  const dispatch = useNotifyDispatch()

  const mutation = useMutation({
  mutationFn: updateAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries('anecdotes')
    }
  } )

  

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAll,
    retry: 1
  })

  console.log(JSON.parse(JSON.stringify(result)))

if(result.isLoading) {
  return <div>Loading...</div>
}

if(result.isError) {
  return <div>Error with server {result.error.message}</div>
}

  const handleVote = (anecdote) => {
    mutation.mutate({...anecdote, votes: anecdote.votes + 1})
    dispatch({type: 'ADD_NOTI', payload: `you voted '${anecdote.content}'`})
    setTimeout(() => {
      dispatch({type: 'REMOVE_NOTI'})
    }, 5000)
  }


  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
