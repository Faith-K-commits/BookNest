import BookList from "./BookList";
import { useOutletContext } from "react-router-dom";

const BookContainer = () => {
  const { books, loading } = useOutletContext();
  return (
    <div>
      {!loading ? <BookList books={books} /> : <h1>Loading Collection...</h1>}
    </div>
  );
};

export default BookContainer;
