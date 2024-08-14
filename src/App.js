import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const addBook = (newBook) => {
    fetch("http://localhost:8001/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((book) => {
        setBooks([...books, book]);
      });
  };

  const handleFilterChange = (e) => setFilter(e.target.value);

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(filter.toLowerCase()) ||
      book.authors.some((author) =>
        // Check if atleast one author is found
        author.toLowerCase().includes(filter.toLowerCase())
      ) ||
      // Check if atleast one category is found
      book.categories.some((category) =>
        category.toLowerCase().includes(filter.toLowerCase())
      )
  );

  const deleteBook = (id) => {
    fetch(`http://localhost:8001/books/${id}`, { method: "DELETE" }).then(
      () => {
        const updatedData = books.filter((book) => book.id !== id);
        setBooks(updatedData);
      }
    );
  };

  return (
    <div>
      <NavBar />
      <div className="filter">
        <input
          type="text"
          placeholder="Filter by title, author, or category"
          value={filter}
          onChange={handleFilterChange}
        />
      </div>
      <Outlet
        context={{ books: filteredBooks, addBook, loading, deleteBook }}
      />
      {filteredBooks.length === 0 && (
        <p className="no-books-message">
          No books found matching your criteria.
        </p>
      )}
    </div>
  );
};

export default App;
