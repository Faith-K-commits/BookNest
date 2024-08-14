import React, { useState, useEffect } from "react";
import { useParams, useOutletContext, useNavigate } from "react-router-dom";

const BookDetail = () => {
  const { title } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const { deleteBook } = useOutletContext();
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteBook(book.id);
    navigate("/");
  };

  useEffect(() => {
    fetch(`http://localhost:8001/books?title=${title}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setBook(data[0]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [title]);

  if (loading) return <h1>Loading Book...</h1>;

  return (
    <div className="book-detail">
      <h1>{book.title}</h1>
      {/* FIXME: Resize cover image size */}
      <img src={book.cover} alt={`${book.title} cover`} />
      <div className="book-detail-content">
        <p>
          <strong>Authors:</strong> {book.authors.join(", ")}
        </p>
        <p>
          <strong>Year:</strong> {book.year}
        </p>
        <p>
          <strong>Categories:</strong> {book.categories.join(", ")}
        </p>
        <p>
          <strong>Description:</strong> {book.description}
        </p>
        {/* TODO: Implement edit and delete feature */}
        <button>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default BookDetail;
