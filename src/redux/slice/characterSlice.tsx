import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
  value: any;
};

const initialState = {
  value: 0,
} as CounterState;

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    reset: () => initialState,
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },


    characterstore:(state, action:any)=>{
        state.value=action.payload
    }
  },
});

export const {
  increment,
  incrementByAmount,
  decrement,
  decrementByAmount,
  reset,
  characterstore
} = counter.actions;

export default counter.reducer;
