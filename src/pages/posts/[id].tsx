import Link from "../../../node_modules/next/link";
import { GetServerSideProps } from "../../../node_modules/next/types";
import { getPost } from "../../lib/posts";
import { Post } from "../../types/index";
import styles from '../../styles/Card.module.css';

export default function PostPage({ post }: { post: Post }) {
  if (!post) {
    return <h1>Post Not Found</h1>;
  }

  return (
    <div className={styles.postContainer}>
      <Link href="/">Back to Home</Link>
      <div className={styles.postDetail}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
}


export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await getPost(params?.id as string);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};
