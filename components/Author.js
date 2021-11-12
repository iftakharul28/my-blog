import React from 'react';

const Author = ({ author }) => {
  return (
    <div className="my-8 mt-12 p-14 rounded-lg bg-black bg-opacity-10">
      <div className="relative">
        <img
          className="object-cover rounded-full absolute"
          style={{
            height: '90px',
            width: '90px',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%) translateY(-100%)',
          }}
          src={author.photo.url}
          alt={author.name}
        />
      </div>
      <h3 className="text-white text-center">{author.name}</h3>
      <p className="text-white text-center mt-2">{author.bio}</p>
    </div>
  );
};

export default Author;
