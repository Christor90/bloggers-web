import React from 'react';

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-50">
      <div className="animate-spin w-16 h-16 rounded-full border-4 border-t-blue-400 border-gray-300"></div>
    </div>
  );
};

export default Spinner;
