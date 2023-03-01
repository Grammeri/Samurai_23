import React from 'react';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>

            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>

                </div>
            </div>
            <Post message={"How are you?"} likeCount={15}/>
            <Post message={"I am good!"} likeCount={20}/>
        </div>
    );
};