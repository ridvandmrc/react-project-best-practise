import { createSlice } from '@reduxjs/toolkit';

export const {
  actions: { setName, setAge },
  reducer,
} = createSlice({
  name: 'person',
  initialState: { name: 'ridvan', age: 18 },
  reducers: {
    setName: (state, data) => {
      state.name = data.payload;
    },
    setAge: (state, data) => {
      state.age = data.payload;
    },
  },
});
