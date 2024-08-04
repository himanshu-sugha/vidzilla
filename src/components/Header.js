import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from './Utils/appSlice';

const Header = () => {
    const dispatch=useDispatch();
    const toggleMenuHandler=()=>{
             dispatch(toggleMenu());
    }
    return (
        <div className='grid grid-flow-col shadow-lg items-center p-2 bg-white'>
           
            <div className='cursor-pointer flex items-center col-span-1 space-x-1'>
                <img onClick={()=>toggleMenuHandler()} className="h-8" src='https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg' alt='Menu Icon' />
                <div className='flex items-center '>
                    <img className="h-12" src='https://t4.ftcdn.net/jpg/02/55/94/55/360_F_255945532_gXYb4gPaatBY39i9KIte3K38KH3lJYIq.jpg' alt='YouTube Logo' />
                    <span>VidZilla</span>
                </div>
            </div>
            {/* Search Bar */}
            <div className='col-span-7 flex items-center '>
                <input 
                    className='border border-gray-300 rounded-l-full p-2 w-full focus:outline-none focus:border-blue-500' 
                    type="text" 
                    placeholder="Search..."
                />
                <button className='p-2 bg-blue-500 text-white rounded-r-full   hover:bg-blue-600 focus:outline-none'>
                    🔍
                </button>
            </div>
            {/* User Icon */}
            <div className='col-span-1 flex justify-end'>
                <img className="h-8 w-8 rounded-full border border-gray-300" src='https://tse2.mm.bing.net/th?id=OIP.fqSvfYQB0rQ-6EG_oqvonQHaHa&pid=Api&P=0&h=180' alt="User" />
            </div>
        </div>
    );
}

export default Header;
