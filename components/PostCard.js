import React from 'react';
import moment from 'moment';
import Link from 'next/link';
const PostCard = ({ post }) => {
  console.log(post);
  return (
    <div className="bg-green-200 shadow-lg rounded-lg p-0 lg:p-8 pd-12 mb-8">
      <div
        className="relative overflow-hidden shadow-md cursor-pointer"
        style={{ paddingBottom: '56.25%', height: '0' }}
      >
        <Link href={`/post/${post.slug}`}>
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className="object-cover block absolute w-full h-full inset-0"
          />
        </Link>
      </div>
      <h1 className="text-center my-8 cursor-pointer text-2xl font-semibold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="flex justify-center items-center gap-2 my-8">
        <img
          className="object-cover rounded-full"
          style={{ height: '35px', width: '35px' }}
          src={post.author.photo.url}
          alt={post.author.name}
        />
        <p className="text-gray-400">{post.author.name}</p>
      </div>
      <div className="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 inline mr-2 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span>{moment(post.createAt).format('MMM DD,YYYY')}</span>
      </div>
      <p className="text-center text-lg text-gray-700 font-normal my-8">
        {post.excerpt}
      </p>
      <Link href={`/post/${post.slug}`} passHref>
        <button
          className="bg-red-600 px-4 py-3 mx-auto table text-white text-lg font-normal"
          style={{ borderRadius: '15px' }}
        >
          Read More
        </button>
      </Link>
    </div>
  );
};

export default PostCard;
