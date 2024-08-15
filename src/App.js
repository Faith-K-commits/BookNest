import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const deleteBook = (id) => {
    fetch(`http://localhost:8001/books/${id}`, { method: "DELETE" }).then(
      () => {
        const updatedData = books.filter((book) => book.id !== id);
        setBooks(updatedData);
      }
    );
  };

  const editBook = (id, updatedBook) => {
    fetch(`http://localhost:8001/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    })
      .then((res) => res.json())
      .then(() => {
        const updatedData = books.map((book) =>
          book.id === id ? updatedBook : book
        );
        setBooks(updatedData);
      });
  };

  return (
    <div>
      <NavBar />
      <Outlet
        context={{
          books,
          addBook,
          loading,
          deleteBook,
          editBook,
        }}
      />
    </div>
  );
};

export default App;
