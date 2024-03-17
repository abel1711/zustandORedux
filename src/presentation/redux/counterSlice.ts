import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store';

// Define a type for the slice state
export interface CounterState {
    value: number
}

// Define the initial state using that type
const initialState: CounterState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        incrementBy: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }
})

export const { incrementBy } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.count

export default counterSlice