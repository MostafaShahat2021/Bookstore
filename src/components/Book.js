// // import React from 'react';
// // import PropTypes from 'prop-types';

// // function Book({ title, author, id }) {
// //   const handelDelete = (e) => {
// //     e.preventDefault();
// //   };

// //   return (
// //     <div className="add-book-container">
// //       <div className="book-container" key={id}>
// //         <p className="book-title">{title}</p>
// //         <p className="book-author">{author}</p>
// //         <button type="button" onClick={handelDelete}>Delete</button>
// //       </div>
// //     </div>
// //   );
// // }

// // Book.propTypes = {
// //   title: PropTypes.string.isRequired,
// //   author: PropTypes.string.isRequired,
// //   id: PropTypes.number.isRequired,
// // };

// // export default Book;

// import React from 'react';
// import PropTypes from 'prop-types';
// import { nanoid } from '@reduxjs/toolkit';

// import { useDispatch } from 'react-redux';
// import { removeBook } from '../redux/books/booksSlice';

// const tempId = nanoid();

// function Book({ title, author, id }) {
//   // const { books } = useSelector((state) => state.books);
//   const dispatch = useDispatch();
//   return (
//     <div className="add-book-container" key={id}>
//       <div className="book-container">
//         <p className="book-title">{title}</p>
//         <p className="book-author">{author}</p>
//         <button type="button" onClick={() => dispatch(removeBook(id))}>
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// }

// Book.defaultProps = { id: tempId };

// Book.propTypes = {
//   title: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
//   id: PropTypes.string,
// };

// export default Book;
