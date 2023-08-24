import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import CategoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categorie: CategoriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
