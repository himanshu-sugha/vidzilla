import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";

import { addMessage } from "./Utils/liveChatSlice";
import {generateRandomCompliment,
    generateRandomId,
    generateRandomName } from "./Utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [userMessage, setUserMessage] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newMessage = {
        id: generateRandomId(5),
        name: generateRandomName(),
        message: generateRandomCompliment(),
      };
      dispatch(addMessage(newMessage));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userMessage.trim()) {
      const newMessage = {
        id: generateRandomId(5),
        name: "Himanshu Sugha",
        message: userMessage,
      };
      dispatch(addMessage(newMessage));
      setUserMessage("");
    }
  };

  const handleChange = (e) => {
    setUserMessage(e.target.value);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-2 flex flex-col-reverse">
        {chatMessages.map((msg) => (
          <div key={msg.id} className="flex items-start space-x-2">
            <FaUserCircle className="text-2xl text-gray-600" />
            <div className="bg-gray-100 rounded-xl p-2 shadow-sm w-full">
              <div className="text-sm font-semibold text-gray-700">{msg.name}</div>
              <div className="text-sm text-gray-800">{msg.message}</div>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="p-2 bg-white border-t border-gray-300">
        <div className="flex p-2 gap-2 rounded-xl items-center">
          <FaUserCircle className="md:text-4xl text-gray-600" />
          <input
            className="outline-none border-b-2 w-full border-blue-200"
            placeholder="Say something..."
            value={userMessage}
            name="userMessage"
            onChange={handleChange}
          />
          <button type="submit" className="bg-none border-none">
            <AiOutlineSend className="w-10 h-10 text-blue-500 cursor-pointer" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default LiveChat;
