import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ChatMessageCard = ({ name, message }) => {
  return (
    <div className="flex gap-2 p-2 items-start bg-gray-100 rounded-lg shadow-sm">
      <FaUserCircle className="text-2xl text-gray-600" aria-label="User Icon" />
      <div className="flex flex-col">
        <p className="text-sm font-medium text-gray-700">{name}</p>
        <p className="text-sm text-gray-800 break-all">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessageCard;
