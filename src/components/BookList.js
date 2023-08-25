import React, { useEffect } from 'react';
// import { CircularProgressbar } from 'react-circular-progressbar';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, deleteBook } from '../redux/books/booksSlice';

function BookList() {
  const { books, isLoading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      {/* <h2 className="add-book-title">Book List</h2> */}
      <div className="books-container">
        {isLoading && <h4 className="loading">Loading...</h4>}
        {error && <h4 className="loading">Failed to fetch books</h4>}
        {books.length <= 0 && (
          <h4 className="loading">
            Oops! There are currently no books on the list. Please check back
            later or add some books to the list.
          </h4>
        )}
        {books.map((book) => (
          <div className="add-book-container" key={book.item_id}>
            <div className="book-container">
              <div className="book-data">
                <p className="category">Computer Science</p>
                <p className="book-title">{book.title}</p>
                <p className="book-author">{book.author}</p>
                <button type="button" className="btn btn-1">
                  Comments
                </button>
                <button
                  type="button"
                  className="btn btn-2"
                  onClick={() => dispatch(deleteBook(book.item_id))}
                >
                  Remove
                </button>
                <button type="button" className="btn btn-3">
                  Edit
                </button>
              </div>
              <div className="progress-container">
                <div className="percentage-circle">
                  <div className="rotation">
                    <span className="blue-circle" />
                  </div>
                  <div className="percentage-sign">
                    <h3>64%</h3>
                    <p>Completed</p>
                  </div>
                </div>
              </div>
              <div className="chapter-container">
                <p className="current-chapter">current chapter</p>
                <p className="chpter">chapter 17</p>
                <button type="button" className="btn-prog">update progress</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
