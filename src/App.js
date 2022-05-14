import './App.css';
import { useEffect, useState } from 'react';
import { PostCard } from './components/PostCard';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
      const photosResponse = await fetch('https://jsonplaceholder.typicode.com/photos');
  
      const posts = await postsResponse.json();
      const photos = await photosResponse.json();

      const addCover = (post, index) => ({
        ...post,
        cover: photos[index].url
      });

      setPosts(posts.map(addCover));
    };

    fetchData();
  }, []);

  return (
    <section className="container">
      <div className="posts">
        {posts.map(post => (
          <PostCard
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </section>
  );
}

export default App;
