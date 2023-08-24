import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_ID = 'o8gNWqHyTvWh03hlvQfO';
const BASE_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}/books`;
// console.log(BASE_URL);

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(BASE_URL);
    // console.log(response);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch books');
  }
});

export const postBook = createAsyncThunk('books/postBook', async (book, thunkAPI) => {
  try {
    const response = await axios.post(BASE_URL, book);
    thunkAPI.dispatch(fetchBooks());
    return response.data;
  } catch (error) {
    return error;
  }
});

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (bookId, thunkAPI) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${bookId}`, JSON.stringify({ item_id: bookId }));
      thunkAPI.dispatch(fetchBooks());
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

const initialState = {
  books: [],
  isloading: true,
  isBookAdded: true,
  isBookDeleted: true,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => ({
        ...state,
        isloading: true,
      }))
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const booksList = action.payload;
        // console.log(booksList);
        const newBooksList = [];
        Object.keys(booksList).forEach((book) => {
          newBooksList.push({
            item_id: book,
            title: booksList[book][0].title,
            author: booksList[book][0].author,
            category: 'story',
          });
        });
        return {
          ...state,
          books: newBooksList,
          isloading: false,
        };
      })
      .addCase(fetchBooks.rejected, (state) => ({
        ...state,
        isloading: false,
      }))
      .addCase(postBook.pending, (state) => ({
        ...state,
        isBookAdded: false,
      }))
      .addCase(postBook.fulfilled, (state) => ({
        ...state,
        isBookAdded: true,
      }))
      .addCase(deleteBook.pending, ((state) => ({
        ...state,
        isBookDeleted: false,
      })))
      .addCase(deleteBook.fulfilled, (state) => ({
        ...state,
        isBookDeleted: true,
      }));
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
