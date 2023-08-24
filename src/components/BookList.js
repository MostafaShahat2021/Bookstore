import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, removeBook } from '../redux/books/booksSlice';

function BookList() {
  // const id = nanoid();
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.books.isLoading);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  if (isLoading) {
    return <div>{isLoading}</div>;
  }
  return (
    <div>
      <h2 className="add-book-title">Book List</h2>
      <div>
        {books.map((book) => (
          <div className="add-book-container" key={book.title}>
            <div className="book-container">
              <p className="book-title">{book.title}</p>
              <p className="book-author">{book.author}</p>
              <button type="button" onClick={() => dispatch(removeBook(book.item_id))}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
