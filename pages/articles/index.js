import Link from "next/link";
import styles from "../../styles/posts.module.css";
import Meta from "../../components/Meta";
import Navbar from "../../components/Navbar";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/articles");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const articles = ({ data }) => {
  return (
    <div>
      <Meta title="Articles"></Meta>
      <Navbar></Navbar>
      {
        <div>
          {data.map((article, index) => (
            <div key={article.id} className={styles.posts_div}>
              <h1>{index + 1}.</h1>
              <Link href={`/articles/${article.id}`}>
                <h1>{article.title}</h1>
              </Link>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default articles;
