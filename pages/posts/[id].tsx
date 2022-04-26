import React, { useState } from 'react'
import IPost from '../../types';
import type { InferGetStaticPropsType, NextPage } from 'next'

const Post = ({post}:InferGetStaticPropsType<typeof getStaticProps>) => {
    const [singleInfo,setSingleInfo] = useState<IPost>(post);

  return (
    <>
        <h2 className="text-center font-medium text-[25px] mt-[40px]">{singleInfo.title}</h2>
        <p className="text-center mt-[40px]">{singleInfo.body}</p>
    </>
  )
}

export async function getStaticPaths(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts:IPost[] = await res.json();

    const paths = posts.map((post:IPost)=>({
        params:{id:post.id.toString()}
    }))


    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}:{params:{id:string}}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await res.json();

    return{
        props:{
            post
        }
    }
}



export default Post