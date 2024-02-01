import { createSlice } from "@reduxjs/toolkit";
import anecdoteServices from "../services/anecdotes";




const initialState = []

const anecSlice = createSlice({
name: 'anecdotes',  
initialState,
reducers: {
  vote(state, action) {
    const id = action.payload;
    const newAnecdotes = state.find((anecdote) => anecdote.id === id);
    newAnecdotes.votes++;
    state.sort((a, b) => b.votes - a.votes);

  },
  appendAnecdote(state, action) {
    state.push(action.payload);
},
setAnecdotes(state, action) {
    return action.payload;
},

}})


/*
const anecdoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VOTE": {
      const id = action.payload.id;

      const newAnecdotes = state.map((anecdote) =>
        anecdote.id !== id
          ? anecdote
          : { ...anecdote, votes: anecdote.votes + 1 }
      );

      return newAnecdotes.sort((a, b) => b.votes - a.votes);
  }
    case "NEW_ANECDOTE": {
      const content = action.payload.content;

      return [...state, asObject(content)];
    }
    default:
      return state;
  }
};

export const vote = (id) => {
  return {
    type: "VOTE",
    payload: { id },
  };
};

export const createAnecdote = (content) => {
  return {
    type: "NEW_ANECDOTE",
    payload: { content },
  };
};*/

export const { createAnecdote, vote, appendAnecdote, setAnecdotes } = anecSlice.actions;

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteServices.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdotes = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteServices.create(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const votedAnecdote = (id, anecdote) => {
  return async dispatch => {
    const newAnecdote = {...anecdote, votes: anecdote.votes + 1}
    const updatedAnecdote = await anecdoteServices.update(id, newAnecdote)
    dispatch(vote(updatedAnecdote.id))
  }
}

export default anecSlice.reducer;
