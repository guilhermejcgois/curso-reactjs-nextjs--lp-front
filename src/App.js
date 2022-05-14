import { useEffect, useState } from 'react';
import { loadPosts } from './utils/load-posts';
import { Posts } from './components/Posts';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      setPosts(await loadPosts());
    };

    loadData();
  }, []);

  return (
    <section className="container">
      <Posts posts={posts} />
    </section>
  );
}

export default App;
