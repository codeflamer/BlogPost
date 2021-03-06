import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { GetStaticProps } from 'next'
import IPost from '../types';
import { useState } from 'react';
import PostLists from '../components/PostLists';


const API_URL:string = 'https://jsonplaceholder.typicode.com/posts';



const Home: NextPage = ({posts}:InferGetStaticPropsType<typeof getStaticProps>) => {

  const [postList,setPostList] = useState<IPost[]>(posts);

  return (
    <div>
      <Head>
        <title>Blog App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
        <PostLists posts={postList}/>

      </main>
      
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch(API_URL);
    const posts:IPost[] = await res.json();

    return{
      props: {
        posts,
      },
      // revalidate: 10,
      notFound:true
    }
}
