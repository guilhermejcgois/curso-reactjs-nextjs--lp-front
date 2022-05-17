import React from 'react';
import { render, screen } from '@testing-library/react';
import { Posts } from '.';

const posts = [
  {
    title: 'title 1',
    body: 'body 1',
    id: 1,
    cover: 'img/img1.png',
  },
  {
    title: 'title 2',
    body: 'body 2',
    id: 2,
    cover: 'img/img2.png',
  },
  {
    title: 'title 3',
    body: 'body 3',
    id: 3,
    cover: 'img/img3.png',
  },
];

describe('<Posts />', () => {
  it('should not render posts', () => {
    render(<Posts />);
    expect(screen.queryByRole('heading', /title/i)).not.toBeInTheDocument();
  });

  it('should render posts', () => {
    render(<Posts posts={posts} />);

    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(posts.length);
    expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(posts.length);
    expect(screen.getAllByText(/body/i)).toHaveLength(posts.length);
  });

  it('should match snapshot', () => {
    const { container } = render(<Posts posts={posts} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
