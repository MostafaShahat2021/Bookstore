// import React, { useState } from 'react';
// import Book from './Book';

function BookList() {
  // const [book] = useState([
  //   { title: 'clean code', author: 'robert martin', id: 1 },
  //   { title: 'Introduction to Algorithms', author: 'thomas cormen', id: 2 },
  //   { title: 'eloquent javascript', author: 'Marijn Haverbeke', id: 3 },
  // ]);

  return (
    <div>
      <h2 className="add-book-title">Book List</h2>
      <div>
        {/* {book.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} id={book.id} />
        ))} */}
      </div>
    </div>
  );
}

export default BookList;
