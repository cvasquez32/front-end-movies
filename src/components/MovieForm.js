import React from 'react';

const MovieForm = () => {
  return (
    <form className="max-w-md mx-auto p-6 bg-white shadow rounded" method="POST">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
          Movie Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter movie title"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
          Release Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default MovieForm;