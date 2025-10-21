import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/features/counter/counterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <span>{count}</span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
            <div style={{
                marginTop: '20px'
            }}>
                <button
                    aria-label="Decrement value"
                    onClick={() => {
                        if (confirm("Are you sure you want to increase by 10?")) {
                            dispatch(incrementByAmount(10));
                        }
                    }}
                >
                    Increment by Ammount
                </button>
            </div>
        </div>
    )
}