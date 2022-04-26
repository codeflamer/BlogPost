import React from 'react';
import IPost from '../types';
import SinglePost from './SinglePost';

interface Props {
    posts:IPost[]
}


const PostLists = ({posts}:Props) => {
  return (
    <div >
        {posts.map((post)=>(
          <SinglePost key={post.id} post={post}/>
        ))}
    </div>
  )
}

export default PostLists