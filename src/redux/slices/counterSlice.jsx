import { createSlice } from "@reduxjs/toolkit";

const initialState = {value: 0};

const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value = state.value + 1;
    },
    decrement: (state, action) => {
      state.value = state.value - 1;
    },
    reset: (state, action) => {
      state.value = initialState.value;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
