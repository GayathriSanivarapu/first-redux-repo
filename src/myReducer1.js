import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    id: 0,
    age: 0

};
const myReducer1=createSlice({
 name:'dinga',
 initialState,
 reducers:{
    ageIncrement:(state)=>{
        state.age +=1
    },
    ageDecrement :(state)=>{
        state.age -=1
    },
    idIncrement : (state)=>{
        state.id +=1
    },
    idDecrement :(state)=>{
        state.id -=1
    }
 }
})
export const{ ageIncrement,ageDecrement,idIncrement,idDecrement } = myReducer1.actions;
export default myReducer1.reducer;