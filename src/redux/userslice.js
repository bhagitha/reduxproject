import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:"user",
    initialState :{
        name:"bhagi",
        email:"bhagi@gmail.com"
    },
    reducers:{
        update:(state,action)=>{
            
        }
    }
})