import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getData = createAsyncThunk(
    'getData',
    async () => {
        let data = await axios.get('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list')
        return data.data
    }
)




export const dataSlice = createSlice({
    name: 'data',
    initialState:{
        data: [],
        done:[]
    },
    reducers:{
        addData: (state, action) => {
            state.data.push(action.payload)
        },
        addDone: (state, action) => {
             state.done.push(action.payload)
             let y = state.data.filter(e => e.id !== action.payload.id)
             state.data = y 
        },
        batal: (state, action) => {
            let x = state.done.filter(e => e.id === action.payload)
            let arr = x[0]
              state.data.push({...arr, status:1})  
            let u = state.done.filter(e => e.id !== action.payload)
              state.done = u
              

        },
        updateData: (state, action) => {
            let i = state.data.findIndex(e =>{return e.id === action.payload.id})
            
            state.data[i] = action.payload
            
        },
        deleteData: (state, action) => {
            
            let fil = state.data.filter(e => e.id !== action.payload)
            state.data = fil
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getData.fulfilled, (state, action) => {
               let pData = action.payload.filter(e => e.status === 1)
               let pDone = action.payload.filter(e => e.status === 0)
            state.data = pData
            state.done = pDone
        })
    }
})


export const {addData, addDone, batal, updateData, deleteData} = dataSlice.actions
export default dataSlice.reducer