import React from "react";

const Popup = ({ orderPopup, setOrderPopup }) => {
  if (!orderPopup) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPopup(false);
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50"
      onClick={() => setOrderPopup(false)}
    >
      <div
        className="bg-white dark:bg-blue-950 p-8 rounded-lg w-96 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-md dark:bg-gray-800 dark:border-gray-600"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-md dark:bg-gray-800 dark:border-gray-600"
            required
          />

          <button
            type="Login"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
