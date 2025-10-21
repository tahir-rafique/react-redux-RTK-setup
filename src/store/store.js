import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice'
export const store = configureStore(
    {
        // step-1 reducer
        reducer: {
            counter: counterReducer,
        }


        // step-2 middleware 

    }
)