import React, { useState, useEffect } from 'react';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full sm:flex justify-between items-center border-blue-400 py-8">
        <a href="/" className="font-bold text-white cursor-pointer">
          Blog
        </a>
        <div>
          {categories.map((categorie) => (
            <a
              className="mt-2 ml-4 font-semibold text-white cursor-pointer"
              key={categorie.slug}
              href={`/category/${categorie.slug}`}
            >
              {categorie.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
