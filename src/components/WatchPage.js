import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { closeMenu } from './Utils/appSlice';

const WatchPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // Destructure id from useParams

  useEffect(() => {
    dispatch(closeMenu()); 
  }, [dispatch]);

  return (
    <div className="flex  p-4 ">
      <div className="   aspect-w-16 aspect-h-9">
        <iframe
          className="  md:h-[35rem] lg:w-[60rem]  w-full rounded-lg"
          src={`https://www.youtube.com/embed/${id}`}
          title="Video player"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default WatchPage;
