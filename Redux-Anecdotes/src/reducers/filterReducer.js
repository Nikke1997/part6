import { createSlice } from "@reduxjs/toolkit";



const filtSlice = createSlice({
    name: "filter",
    initialState: "",
    reducers: {
        setFilter(state, action) {
        return action.payload;
        },
    },
    });







/*
const filterReducer = (state = '' , action) => {
  switch (action.type) {
    case "SET_FILTER": {
        const filterValue = action.payload.filterValue;

      return filterValue;
    }
  
    default:
      return state;
  }
};


export const setFilter = (filterValue) => {
  return {
    type: "SET_FILTER",
    payload: { filterValue },
  };
};*/

export const { setFilter } = filtSlice.actions;
export default filtSlice.reducer;
