import React, { useEffect, useState } from 'react';
import { YOUTUBE_API } from './Utils/constants';
import VideoCard from './VideoCard'; 

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
    <div className='w-full p-2'>
      {videos.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1'>
          {videos.map((video) => (
            <VideoCard key={video.id} info={video} />
          ))}
        </div>
      ) : (
        <p className='text-center text-gray-500'>Loading...</p>
      )}
    </div>
  );
}

export default VideoContainer;
