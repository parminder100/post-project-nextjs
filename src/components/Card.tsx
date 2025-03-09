import { Post } from "../types/index";
import styles from "../styles/Card.module.css";
import Link from "../../node_modules/next/link";

export default function Card({ post }: { post: Post }) {
  return (
    <div className={styles.card}>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}...</p>
      <Link href={`/posts/${post.id}`} className={styles.readMore}>
        Read More
      </Link>
    </div>
  );
}
