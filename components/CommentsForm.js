import React, { useState, useEffect, useRef } from 'react';
import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    emailEl.current.value = window.localStorage.getItem('email');
    commentEl.current.value = window.localStorage.getItem('comment');
  }, []);

  const handleCommentSubmission = () => {
    setError(false);
    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { chacked: storeData } = storeDataEl.current;
    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug };

    if (storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('name', name);
      window.localStorage.removeItem('email', email);
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 lg:p-8 my-6">
      <h3 className="text-xl font-semibold border-b mb-2 lg:mb-4 pb-4">
        Leave a Reply
      </h3>
      <div className="my-3">
        <textarea
          type="text"
          ref={commentEl}
          placeholder="comment"
          name="comment"
          className="px-4 py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 resize-none text-gray-700"
        />
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:justify-center lg:gap-4">
        <div className="my-3 lg:my-0">
          <input
            type="text"
            ref={nameEl}
            placeholder="name"
            name="name"
            className="px-4 py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 resize-none text-gray-700"
          />
        </div>
        <div className="my-3 lg:my-0">
          <input
            type="text"
            ref={emailEl}
            placeholder="email"
            name="email"
            className="px-4 py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 resize-none text-gray-700"
          />
        </div>
      </div>
      <div className="my-3">
        <input
          ref={storeDataEl}
          type="checkbox"
          id="storeData"
          name="storeData"
          value="true"
        />
        <label
          className="text-gray-500 cursor-pointer ml-2"
          htmlFor="storeData"
        >
          Save my E-mail and Name for the next time, I comment
        </label>
      </div>
      {error && (
        <p className="text-xs text-red-500 font-semibold text-center">
          All fields are required
        </p>
      )}
      <div className="mt-6">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="bg-red-600 px-4 py-3 mx-auto table text-white text-lg font-normal"
          style={{ borderRadius: '15px' }}
        >
          Submit
        </button>
        {showSuccessMessage && (
          <p className="text-xs text-green-600 font-semibold text-center">
            All fields are required
          </p>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
