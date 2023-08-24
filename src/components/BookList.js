import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, deleteBook } from '../redux/books/booksSlice';

function BookList() {
  // const id = nanoid();
  const { books, isLoading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  // const { isLoading } = useSelector((state) => state.books.isLoading);
  // console.log(isLoading);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  // if (isLoading) {
  //   return <h4>Loading...</h4>;
  // }
  return (
    <div>
      <h2 className="add-book-title">Book List</h2>
      <div>
        {isLoading && <h4 className="loading">Loading...</h4>}
        {error && <h4 className="loading">Failed to fetch books</h4>}
        {books.length <= 0 && <h4 className="loading">Oops! There are currently no books on the list. Please check back later or add some books to the list.</h4>}
        {books.map((book) => (
          <div className="add-book-container" key={book.item_id}>
            <div className="book-container">
              <p className="book-title">{book.title}</p>
              <p className="book-author">{book.author}</p>
              <button type="button" onClick={() => dispatch(deleteBook(book.item_id))}>
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
