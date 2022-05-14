import './App.css';
import { useEffect, useState } from 'react';

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
          <div className="post">
            <img src={post.cover} alt={post.title} />
            <div key={post.id} className="post-content">
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;
