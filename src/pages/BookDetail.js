import React, { useState, useEffect } from "react";
import { useParams, useOutletContext, useNavigate } from "react-router-dom";

const BookDetail = () => {
  const { title } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const { deleteBook, editBook } = useOutletContext();
  const navigate = useNavigate();

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSaveChanges = () => {
    editBook(book.id, book);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteBook(book.id);
    navigate("/");
  };

  if (loading) return <h1>Loading Book...</h1>;

  return (
    <div className="card">
      <div className="form">
        {isEditing ? (
          <div>
            <h1>Edit Book: {book.title}</h1>
            <img src={book.cover} alt={`${book.title} cover`} />
            <form>
              <label>
                <strong>Title:</strong>
                <input
                  type="text"
                  name="title"
                  value={book.title}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                <strong>Authors:</strong>
                <input
                  type="text"
                  name="authors"
                  value={book.authors.join(", ")}
                  onChange={(e) =>
                    setBook({ ...book, authors: e.target.value.split(", ") })
                  }
                />
              </label>
              <label>
                <strong>Year:</strong>
                <input
                  type="text"
                  name="year"
                  value={book.year}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                <strong>Categories:</strong>
                <input
                  type="text"
                  name="categories"
                  value={book.categories.join(", ")}
                  onChange={(e) =>
                    setBook({ ...book, categories: e.target.value.split(", ") })
                  }
                />
              </label>
              <label>
                <strong>Description:</strong>
                <input
                  type="text"
                  name="description"
                  value={book.description}
                  onChange={handleInputChange}
                />
              </label>
              <div className="buttons">
                <button
                  type="button"
                  className="edit"
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="delete"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="book-detail-content">
            <h1>{book.title}</h1>
            <img src={book.cover} alt={`${book.title} cover`} />
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
            <div className="buttons">
              <button onClick={handleEditClick} className="edit">
                Edit
              </button>
              <button className="delete" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetail;
