import PropTypes from 'prop-types';
import React from 'react';

import './styles.css';

import { PostCard } from '../PostCard';

export const Posts = ({ posts = [] }) => (
  <div className="posts">{!!posts.length && posts.map((post) => <PostCard key={post.id} post={post} />)}</div>
);

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};
