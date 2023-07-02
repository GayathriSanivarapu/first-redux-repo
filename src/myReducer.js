import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  age:0
};

const myReducer = createSlice({
  name: 'myReducer',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    ageIncre: (state) => {
      state.age +=5
    }

  },
});

export const { increment, decrement, ageIncre } = myReducer.actions;
export default myReducer.reducer;
