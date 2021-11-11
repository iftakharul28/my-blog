import React, { useState, useEffect } from 'react';
import { getCategories } from '../services';
const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="bg-white shadow-lg rounded-lg px-6 py-8 mb-8">
      <h3 className="text-xl font-semibold border-b mb-6 pb-3">Categories</h3>
      {categories.map((category) => (
        <a
          className="block my-3"
          key={category.slug}
          href={`/categories/${category.slug}`}
        >
          {category.name}
        </a>
      ))}
    </div>
  );
};

export default Categories;
