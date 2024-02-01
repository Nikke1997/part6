import { createSlice } from "@reduxjs/toolkit"

const notificationReducer = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
    setView() {
        return null
    }
  },
})

export const { setNotification, setView } = notificationReducer.actions

export const notify = (message, time) => {
    return async (dispatch) => {
        dispatch(setNotification(message))
        setTimeout(() => {
        dispatch(setView())
        }, time * 1000)
    }
    }
export default notificationReducer.reducer
