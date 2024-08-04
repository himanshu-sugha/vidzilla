import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {
  
const SideBarHandler=useSelector((store)=>store.app.isClosed);

  if(SideBarHandler) return null;
  return (
    <div className='col-span-1 shadow-lg p-4 bg-white h-full'>
      
      <ul className='space-y-2 mb-6'>
        <li className='font-semibold cursor-pointer text-lg'><Link to="/">Home</Link></li>
        <li className='font-semibold text-lg'>Shorts</li>
        <li className='font-semibold text-lg'>Videos</li>
      </ul>
     
      <h1 className='font-bold text-xl mb-4'>Subscriptions</h1>
      
      <ul className='space-y-2'>
        <li className='font-semibold text-lg'>Music</li>
        <li className='font-semibold text-lg'>Sports</li>
        <li className='font-semibold text-lg'>Gaming</li>
        <li className='font-semibold text-lg'>Movies</li>
      </ul>
    </div>
  );
}

export default SideBar;
