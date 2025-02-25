import { configureStore, createSlice } from '@reduxjs/toolkit'

let cart = createSlice(
    {
        name: 'cart',
        initialState: [
            { id: 0, name: 'White and Black', count: 2 },
            { id: 2, name: 'Grey Yordan', count: 1 }
        ],
        reducers: {
            changeState(state) {
                return(
                    [
                        { id: 1, name: 'White and Black', count: 2 },
                        { id: 2, name: 'Grey Yordan', count: 1 }
                    ]
                )
                
            }
        }
    }
)

let user = createSlice({
    name: 'user',
    initialState: { name: 'kim', age: 20 },
    reducers: {
        addAge(state, action) {
            state.age = state.age + action.payload
        }
    }
})


export default configureStore({
    reducer: {
        cart: cart.reducer,
        user: user.reducer
    }
})

export let { changeState } = cart.actions
export let { addAge } = user.actions