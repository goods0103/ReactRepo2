import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice(
    {
        name : 'user',
        initialState : 'Yun'
    }
)
export default configureStore({
  reducer: { 
    user : user.reducer
  }
})