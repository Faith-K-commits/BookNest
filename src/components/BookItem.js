import React from "react";
import { useNavigate } from "react-router-dom";

const BookItem = ({ book }) => {
  const navigate = useNavigate();

  const handleClickBook = () => {
    navigate(`/books/${book.title}`);
  };

  return (
    <div className="card">
      <img src={book.cover} alt={book.title} />
      <h3>{book.title}</h3>
      {Array.isArray(book.authors) &&
        book.authors.map((author, index) => <span key={index}>{author}</span>)}
      <br />
      <button onClick={handleClickBook}>Book Info</button>
    </div>
  );
};

export default BookItem;
