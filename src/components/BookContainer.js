import { useEffect, useState } from "react";
import BookList from "./BookList";
import { Outlet } from "react-router-dom";

const BookContainer = () => {
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
    });
    setBooks([...books, newBook]);
  };

  return (
    <div>
      {!loading ? <BookList books={books} /> : <h1>Loading...</h1>}
      <Outlet context={addBook} />
    </div>
  );
};

export default BookContainer;
