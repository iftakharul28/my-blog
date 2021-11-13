import React, { useState, useEffect } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import { getComments } from '../services';
import { comment } from 'postcss';
const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, []);
  return (
    <>
      {comment.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-xl font-semibold border-b">
            {comments.length} comments
          </h3>
          {comments.map((comment) => (
            <div
              key={comment.createdAt}
              className="border-b border-gray-100 pb-4 mb-4"
            >
              <div className="flex gap-2 my-4">
                <p className="font-semibold">{comment.name}</p>
                <p>on</p>
                <p>{moment(comment.createdAt).format('MMM DD,YYYY')}</p>
              </div>
              <p className="text-gray-600 w-full">{parse(comment.comment)}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
