import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../store/features/counter/counterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className=' w-full max-w-[500px] flex flex-col justify-center items-center'>
            <button
                className=' bg-pink-300 p-2 rounded-md shadow-md font-mono font-bold cursor-pointer'
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <span className='h-[100px] w-[100px] text-center flex justify-center items-center bg-white my-4 rounded-md drop-shadow-2xl shadow-md font-mono text-4xl'>{count}</span>
            <button
                className=' bg-pink-300 p-2 rounded-md shadow-md font-mono font-bold cursor-pointer'
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>

            <div
                className='bg-white p-2 rounded-md shadow-md font-mono text-lg font-semibold cursor-pointer'
                style={{
                    marginTop: '20px'
                }}
            >
                <button
                    className='bg-pink-300 p-3 rounded-md shadow-md font-mono text-lg font-semibold cursor-pointer'
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