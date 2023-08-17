import React, { useState } from 'react';

function Book() {
  const [book, setBook] = useState([
    { title: 'clean code', author: 'robert martin', id: 1 },
    { title: 'Introduction to Algorithms', author: 'thomas cormen', id: 2 },
    { title: 'eloquent javascript', author: 'Marijn Haverbeke', id: 3 },
  ]);

  const handelDelete = (e) => {
    e.preventDefault();
    setBook([...book]);
  };

  return (
    <div className="add-book-container">
      <h2 className="add-book-title">Book List</h2>
      <div>
        {book.map((book) => (
          <div className="book-container" key={book.id}>
            <p className="book-title">{book.title}</p>
            <p className="book-author">{book.author}</p>
            <button type="button" onClick={handelDelete}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Book;
