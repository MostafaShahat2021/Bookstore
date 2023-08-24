import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postBook } from '../redux/books/booksSlice';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setauthor] = useState('');
  const dispatch = useDispatch();

  const handelAddBookClick = (e) => {
    e.preventDefault();
    if (title.trim() === '' || author.trim() === '') {
      return;
    }
    const newBook = {
      item_id: nanoid(),
      title,
      author,
      category: 'story',
    };
    dispatch(postBook(newBook));
    setTitle('');
    setauthor('');
  };

  return (
    <div>
      <h2 className="form-title">Add new book</h2>
      <form className="form-container">
        <input
          className="title-input"
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          className="author-input"
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setauthor(e.target.value)}
          required
        />
        <button type="submit" onClick={handelAddBookClick}>Add Book</button>
      </form>
    </div>
  );
}

export default Form;
