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
    <div>
      <h2>Book List</h2>
      <div>
        {book.map((book) => (
          <div key={book.id}>
            <p>{book.title}</p>
            <p>{book.author}</p>
            <button type="button" onClick={handelDelete}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Book;
