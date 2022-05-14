import { useEffect, useState } from "react";

import "./styles.css";

import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/load-posts";
import { Button } from "../../components/Button";

export const Home = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [hasMorePosts, setHasMorePosts] = useState(false);
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState([]);
  const [postsPerPage] = useState(10);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    setPosts(posts.concat(nextPosts));
    setPage(nextPage);
  };

  useEffect(() => {
    const loadData = async () => {
      const loadedPosts = await loadPosts();
      setAllPosts(loadedPosts);
      setPosts(loadedPosts.slice(page * postsPerPage, postsPerPage));
    };

    loadData();
  });

  useEffect(() => {
      setHasMorePosts(page + postsPerPage < allPosts.length);
  }, [page, postsPerPage, allPosts]);

  return (
    <section className="container">
      <Posts posts={posts} />

      <div class="button-container">
        <Button
          text="Load more posts"
          onClick={() => loadMorePosts()}
          disabled={!hasMorePosts}
        />
      </div>
    </section>
  );
};
