import React from 'react';

const Button = ({name}) => {
  return (
    <button className="px-4 m-2 mx-3 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none">
      {name}
    </button>
  );
}

export default Button;
