import PropTypes from 'prop-types';
import React from 'react';

import './styles.css';

export const PostCard = ({ post: { title, cover, body, id } }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h2>
        {title} {id}
      </h2>
      <p>{body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  post: PropTypes.objectOf({
    body: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};
