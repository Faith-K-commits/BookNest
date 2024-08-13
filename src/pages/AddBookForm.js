import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const AddBookForm = () => {
  const { addBook } = useOutletContext();
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState("");
  const [year, setYear] = useState("");
  const [categories, setCategories] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      authors: authors.split(",").map((author) => author.trim()), // Convert to array
      year,
      categories: categories.split(",").map((category) => category.trim()), // Convert to array
      description,
      cover,
    };
    addBook(newBook);
    setTitle("");
    setAuthors("");
    setYear("");
    setCategories("");
    setDescription("");
    setCover("");
    navigate("/");
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Authors"
          value={authors}
          onChange={(e) => setAuthors(e.target.value)}
        />
        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="Categories"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Cover"
          value={cover}
          onChange={(e) => setCover(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
