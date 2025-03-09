import { useState } from "react";
import { GetStaticProps } from "../../node_modules/next/types";
import { getPosts } from "../lib/posts";
import { Post } from "../types/index";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";

export default function Home({ posts }: { posts: Post[] }) {
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1>All Posts</h1>


      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchInput}
      />


      <div className={styles.grid}>
        {filteredPosts.length === 0 ? (
          <p>No posts found</p>
        ) : (
          filteredPosts.map((post) => <Card key={post.id} post={post} />)
        )}
      </div>
    </div>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: { posts },
    revalidate: 60,
  };
};
