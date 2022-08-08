import Meta from "../../components/Meta";
import Navbar from "../../components/Navbar";
import styles from "../../styles/posts.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/articles");
  const articles = await res.json();

  const paths = articles.map((article) => {
    return {
      params: {
        articleNo: article.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.articleNo;
  const res = await fetch(`http://localhost:3000/api/articles/${id}`);
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

const articleNo = ({ article }) => {
  return (
    <div>
      <Meta title={article.title}></Meta>
      <Navbar></Navbar>
      <div className={styles.posts_div}>
        <h1>{article.id}.</h1>
        <div>
          <h1>{article.title}</h1>
          <h6>{article.body}</h6>
        </div>
      </div>
    </div>
  );
};

export default articleNo;
