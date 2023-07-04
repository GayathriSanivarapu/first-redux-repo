import { configureStore } from '@reduxjs/toolkit';

// Import your reducers here
import myReducer from './myReducer';
import myReducer1 from './myReducer1';


const store = configureStore({
  reducer: {
    // Add your reducers here
    myReducer: myReducer,
    dinga :myReducer1
  },
});

export default store;
