import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8001/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>Loading Categories...</h1>;

  return (
    <div className="categories">
      {categories.map((category) => (
        <div key={category.id} className="category-card">
          <Link to={`/categories/${category.category}`}>
            {category.category}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
