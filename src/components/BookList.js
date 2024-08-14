import React from "react";
import BookItem from "./BookItem";

const BookList = ({ books }) => {
  return (
    <>
      <h1>My Collection</h1>
      {/* TODO: Add search functionality */}
      <div className="book-grid">
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </>
  );
};

export default BookList;
