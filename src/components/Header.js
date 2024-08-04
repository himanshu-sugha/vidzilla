    import React, { useEffect, useState } from 'react';
    import { useDispatch } from 'react-redux';
    import { toggleMenu } from './Utils/appSlice';
    import { YOUTUBE_SEARCH_API } from './Utils/constants';

    const Header = () => {
        const [searchQuery, setSearchQuery] = useState("");
        const [suggestions, setSuggestions] = useState([]);
        const [showSuggestions,setShowSuggestions]=useState(false)
        const dispatch = useDispatch();

        const toggleMenuHandler = () => {
            dispatch(toggleMenu());
        };

        const getSearchQuery = async () => {
            if (searchQuery.trim() === "") return;
            try {
                const response = await fetch(`${YOUTUBE_SEARCH_API}${searchQuery}`);
                const data = await response.json();
            console.log(data);
                setSuggestions(data[1] || []);
            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        };

        useEffect(() => {
            const timer = setTimeout(() => {
                getSearchQuery();
            }, 200);
            return () => clearTimeout(timer);
        }, [searchQuery]);

        return (
            <div className='relative'>
                <div className='grid grid-flow-col shadow-lg items-center p-2 bg-white'>
                    <div className='cursor-pointer flex items-center col-span-1 space-x-1'>
                        <img
                            onClick={toggleMenuHandler}
                            className="h-8"
                            src='https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg'
                            alt='Menu Icon'
                        />
                        <div className='flex items-center'>
                            <img className="h-12" src='https://t4.ftcdn.net/jpg/02/55/94/55/360_F_255945532_gXYb4gPaatBY39i9KIte3K38KH3lJYIq.jpg' alt='YouTube Logo' />
                            <span>VidZilla</span>
                        </div>
                    </div>

                    <div className='col-span-7 flex items-center relative'>
                        <input
                            className='border border-gray-300 rounded-l-full p-2 w-full focus:outline-none focus:border-blue-500'
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={()=>setShowSuggestions(true)}
                            onBlur={()=>setShowSuggestions(false)}
                        />
                        <button className='p-2 bg-blue-500 text-white rounded-r-full hover:bg-blue-600 focus:outline-none'>
                            🔍
                        </button>

                        { showSuggestions && searchQuery && (
                            <div className='absolute top-full left-0 w-full flex justify-center mt-1'>
                                <ul className='bg-white border border-gray-300 rounded-md shadow-lg p-2 w-1/2'>
                                    {suggestions.length ? (
                                    suggestions.map((item, index) => (
                                            <li key={index} className='p-2 hover:bg-gray-200 cursor-pointer'>
                                                {item || "No title available"} {}
                                            </li>
                                        ))
                                    ) : (
                                        <li className='p-2 text-center'>No suggestions</li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className='col-span-1 flex justify-end'>
                        <img className="h-8 w-8 rounded-full border border-gray-300" src='https://tse2.mm.bing.net/th?id=OIP.fqSvfYQB0rQ-6EG_oqvonQHaHa&pid=Api&P=0&h=180' alt="User" />
                    </div>
                </div>
            </div>
        );
    };

    export default Header;
