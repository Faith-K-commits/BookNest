import React, { useState } from "react";
import BookItem from "./BookItem";

const BookList = ({ books }) => {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => setFilter(e.target.value);

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(filter.toLowerCase()) ||
      book.authors.some((author) =>
        // Check if at least one author is found
        author.toLowerCase().includes(filter.toLowerCase())
      ) ||
      // Check if at least one category is found
      book.categories.some((category) =>
        category.toLowerCase().includes(filter.toLowerCase())
      )
  );
  return (
    <>
      <h1>My Collection</h1>
      <div className="filter">
        <input
          type="text"
          placeholder="Filter by title, author, or category"
          value={filter}
          onChange={handleFilterChange}
        />
      </div>
      <div className="book-grid">
        {filteredBooks.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
      {filteredBooks.length === 0 && (
        <p className="no-books-message">
          No books found matching your criteria.
        </p>
      )}
    </>
  );
};

export default BookList;
