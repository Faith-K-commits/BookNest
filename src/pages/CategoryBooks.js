import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BookItem from "../components/BookItem";

const CategoryBooks = () => {
  const { category } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8001/books?categories_like=${category}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Log the fetched data
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [category]);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>Books in {category} Category</h1>
      {books.length > 0 ? (
        <div className="book-grid">
          {books
            .filter(
              (book) =>
                Array.isArray(book.categories) &&
                book.categories.includes(category)
            )
            .map((book) => (
              <BookItem key={book.id} book={book} />
            ))}
        </div>
      ) : (
        <p>No books found in this category.</p>
      )}
    </div>
  );
};

export default CategoryBooks;
