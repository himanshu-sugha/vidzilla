import React, { useEffect, useState } from 'react';
import { COMMENTS_API } from './Utils/constants';
import moment from 'moment';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

const Comments = ({ id }) => {
    const [comments, setComments] = useState([]);

    const getcomments = async (id) => {
        try {
            const response = await fetch(`${COMMENTS_API}${id}`);
            const data = await response.json();
            setComments(data.items || []); 
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };

    useEffect(() => {
        if (id) {
            getcomments(id);
        }
    }, [id]);

    return (
        <div className="p-4">
            <p className="text-lg font-bold mb-4">{comments.length} Comments</p>
            {comments.length > 0 ? (
                comments.map((comment) => {
                    const {
                        authorDisplayName,
                        authorProfileImageUrl,
                        textDisplay,
                        publishedAt,
                        likeCount = 0,
                    } = comment?.snippet?.topLevelComment?.snippet || {};
                    
                    return (
                        <div key={comment.id} className="flex gap-4 mb-4 p-4 border-b border-gray-300">
                            <img
                                src={authorProfileImageUrl}
                                alt="author"
                                className="rounded-full h-12 w-12 object-cover"
                            />
                            <div className="flex flex-col w-full">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-md font-semibold text-gray-800 no-underline">
                                            {authorDisplayName}
                                        </h3>
                                        <p className="text-xs text-gray-500 no-underline">
                                            {moment(publishedAt).fromNow()}
                                        </p>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <AiOutlineLike className="mr-2" />
                                        {likeCount}
                                        <AiOutlineDislike className="ml-4" />
                                    </div>
                                </div>
                                <p className="mt-2 text-gray-700 no-underline word-spacing">
                                    {textDisplay}
                                </p>
                            </div>
                        </div>
                    );
                })
            ) : (
                <p className="text-gray-600">No comments available</p>
            )}
        </div>
    );
};

export default Comments;
