import React, { useEffect, useState } from 'react';
import { YOUTUBE_API } from './Utils/constants';
import VideoCard from './VideoCard'; 
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(YOUTUBE_API);
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.log('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []); 

  return (
    <div className='w-full p-4'>
      {videos.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {videos.map((video) => (
            <Link key={video.id} to={`/watch/${video.id}`}>
              <VideoCard info={video} />
            </Link>
          ))}
        </div>
      ) : (
        <p className='text-center text-gray-500'>Loading...</p>
      )}
    </div>
  );
}

export default VideoContainer;
