import { useEffect, useState } from "react";
import BookList from "./BookList";

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
  return (
    <div>{!loading ? <BookList books={books} /> : <h1>Loading...</h1>}</div>
  );
};

export default BookContainer;
