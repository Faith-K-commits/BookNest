import React from "react";
import { useParams } from "react-router-dom";

const BookDetail = () => {
  const params = useParams();
  const bookTitle = params.title;

  return <div className="card">{bookTitle}</div>;
};

export default BookDetail;
