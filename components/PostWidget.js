import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRealatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRealatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRealatedPosts(result));
    }
  }, [slug]);
  return (
    <div className="bg-white shadow-lg rounded-lg px-6 py-8 mb-8">
      <h3 className="text-xl font-semibold border-b mb-6 pb-3">
        {slug ? 'Related Post' : 'Recent Post'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-6">
          <div className="w-16 h-16 flex-none">
            <img
              src={post.featuredImage.url}
              alt={post.title}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="flex-grow ml-3">
            <p>{moment(post.createAt).format('MMM DD,YYYY')}</p>
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
