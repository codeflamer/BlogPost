import Link from 'next/link'
import React from 'react'
import Post from '../types'

interface Props {
    post:Post
}

const SinglePost = ({post}:Props) => {
  return (
    <>
        <Link href={`/posts/${encodeURIComponent(post.id)}`} passHref>
            <div key={post.id} className='mb-2 cursor-pointer hover:bg-gray-100'>
                <h3 className='font-medium text-center underline mb-4 uppercase'>{post.title}</h3>
                <p className='text-center'>{post.body}</p>
                <hr className='mb-2'/>
                <hr/>
            </div>
        </Link>
    </>
  )
}

export default SinglePost