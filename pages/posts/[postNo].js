import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Meta from "../../components/Meta";
import styles from "../../styles/posts.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const paths = data.map((posts) => {
    return {
      params: {
        postNo: posts.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.postNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const DynamicPost = ({ data }) => {
  // const router = useRouter();
  // const pageNo = router.query.postNo;
  // console.log(pageNo)
  return (
    <div>
      <Meta title={data.title} description={data.body}></Meta>
      <Navbar></Navbar>
      <div className={styles.posts_div}>
        <h1>{data.id}.</h1>
        <div>
          <h1>{data.title}</h1>
          <h6>{data.body}</h6>
        </div>
      </div>
    </div>
  );
};

export default DynamicPost;
