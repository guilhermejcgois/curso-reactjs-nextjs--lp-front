import './styles.css';

import { PostCard } from "../PostCard";

export const Posts = ({ posts = [] }) => (
    <div className="posts">
        {!!posts.length && posts.map(post => (
          <PostCard
            key={post.id}
            post={post}
          />
        ))}
    </div>
);
