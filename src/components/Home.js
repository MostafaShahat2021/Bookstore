import React from 'react';
import Form from './Form';
// import Book from './Book';
import BookList from './BookList';

function Home() {
  return (
    <div className="home">
      <BookList />
      <Form />
    </div>
  );
}

export default Home;
