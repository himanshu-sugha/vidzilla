import React from 'react';

const VideoCard = ({ info }) => {
  const { title, channelTitle, publishedAt } = info?.snippet;
  const viewCount = info?.statistics?.viewCount;

  return (
    <div className="p-4 border  border-gray-300 rounded-lg shadow-md w-80">
      <img 
        src={info?.snippet?.thumbnails?.high?.url} 
        alt="thumbnail" 
        className="w-full h-48 object-cover mb-2 rounded-lg"
      />
      <div className="text-lg font-semibold mb-1 truncate">{title}</div>
      <p className="text-sm text-gray-600 mb-1 truncate">{channelTitle}</p>
      <p className="text-sm text-gray-500 mb-1">{viewCount} views</p>
      <p className="text-sm text-gray-500">{publishedAt}</p>
    </div>
  );
}

export default VideoCard;
