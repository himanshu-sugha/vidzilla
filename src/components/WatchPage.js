import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { closeMenu } from './Utils/appSlice';
import LiveChat from './LiveChat';
import CommentContainer from './CommentContainer';

const WatchPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(closeMenu()); 
  }, [dispatch]);

  return (
    <div className="flex flex-col p-4">
      <div className="aspect-w-16 flex aspect-h-9">
        <iframe
          className="md:h-[35rem] lg:w-[60rem] w-full rounded-lg"
          src={`https://www.youtube.com/embed/${id}`}
          title="Video player"
          allowFullScreen
        ></iframe>
          <div className="flex-shrink-0 px-6 w-full md:w-[25rem] lg:w-[30rem]">
          <div className="border border-gray-300 rounded-lg shadow-md bg-gray-200 bg-white p-4 h-[35rem] overflow-y-auto">
            <LiveChat />
          </div>
        </div>  
      </div>
      <div>
        <CommentContainer id={id} /> 
      </div>
    </div>
  );
};

export default WatchPage;
