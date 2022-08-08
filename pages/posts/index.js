import Head from "next/head";
import Link from "next/link";
import React from "react";
import Meta from "../../components/Meta";
import Navbar from "../../components/Navbar";
import styles from '../../styles/posts.module.css'

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const index = ({ data }) => {
  return (
    <div>
      <Meta title="Posts"></Meta>
      <Navbar></Navbar>
      <div >
        {data.slice(0, 10).map((post, index) => (
          <div key={post.id} className={styles.posts_div}>
            <h1>{index + 1}.</h1>
            <Link href={`/posts/${post.id}`}>
              <h1>{post.title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
