import { createSlice } from '@reduxjs/toolkit'
import { useState } from 'react'

const initialState = {
    value: '',
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
       myName:()=>{
        const [newName, setNewName] = useState('tahir');
       }
    }
})