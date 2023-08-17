import React from 'react';

function Form() {
  const handelAddBookClick = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2 className="form-title">Add new book</h2>
      <form className="form-container">
        <input
          className="title-input"
          type="text"
          placeholder="Book title"
        />
        <input
          className="author-input"
          type="text"
          placeholder="Author"
        />
        <button type="submit" onClick={handelAddBookClick}>Add Book</button>
      </form>
    </div>
  );
}

export default Form;
