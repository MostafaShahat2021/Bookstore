import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categories = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

export default categories.reducer;
