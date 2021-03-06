import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full sm:flex justify-between items-center border-blue-400 py-8">
        <Link href="/">
          <a className="font-bold text-white cursor-pointer">Blog</a>
        </Link>

        <div>
          {categories.map((categorie) => (
            <Link href={`/category/${categorie.slug}`} key={categorie.slug}>
              <a className="mt-2 ml-4 font-semibold text-white cursor-pointer">
                {categorie.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
