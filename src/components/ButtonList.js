import React from 'react';
import Button from './Utils/Button';

const list = ["All", "Gaming", "Coding", "Sports", "Cricket", "Sugha", "Movies", "Science", "Fiction","Music"];

const ButtonList = () => {
  return (
    <div>
      {list.map((ListItem, index) => (
        <Button key={index} name={ListItem} />
      ))}
    </div>
  );
}

export default ButtonList;
