import React from 'react';

function Form() {
  const handelAddBookClick = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Add new book</h2>
      <form>
        <input
          type="text"
          placeholder="Book title"
        />
        <input
          type="text"
          placeholder="Author"
        />
        <button type="submit" onClick={handelAddBookClick}>Add Book</button>
      </form>
    </div>
  );
}

export default Form;
