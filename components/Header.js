import React, { useContext } from 'react';
import Link from 'next/link';
const categories = [
  { name: 'React', slug: 'react' },
  { name: 'web Development', slug: 'web-development' },
];

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full sm:flex justify-between items-center border-blue-400 py-8">
        <Link href="/">
          <span className="font-bold text-white cursor-pointer">Blog</span>
        </Link>
        <div>
          {categories.map((categorie) => (
            <Link key={categorie.slug} href={`/category/${categorie.slug}`}>
              <span className="mt-2 ml-4 font-semibold text-white cursor-pointer">
                {categorie.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
