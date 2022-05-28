import React, { useEffect, useState } from 'react';

import './styles.css';

import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export const Home = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [hasMorePosts, setHasMorePosts] = useState(false);
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState([]);
  const [postsPerPage] = useState(2);
  const [searchValue, setSearchValue] = useState('');

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    setPosts(posts.concat(nextPosts));
    setPage(nextPage);
  };

  const updateSearchValue = (event) => setSearchValue(event.target.value);

  useEffect(() => {
    const loadData = async () => {
      const loadedPosts = await loadPosts();
      setAllPosts(loadedPosts);
      setPosts(loadedPosts.slice(page, postsPerPage));
    };

    loadData();
  }, []);

  useEffect(() => {
    setHasMorePosts(page + postsPerPage < allPosts.length);
  }, [page, postsPerPage, allPosts]);

  useEffect(() => {
    const matchesTitle = ({ title }) => title && title.toLowerCase().includes(searchValue.toLowerCase());
    const filteredPosts = searchValue ? allPosts.filter(matchesTitle) : posts;
    setFilteredPosts(filteredPosts);
  }, [searchValue, allPosts, posts]);

  return (
    <section className="container">
      <div className="search-container">
        {!!searchValue && <h1>Search value: {searchValue}</h1>}

        <TextInput searchValue={searchValue} handleChange={updateSearchValue} />
      </div>

      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

      {filteredPosts.length === 0 && <p>Não existem posts =(</p>}

      <div className="button-container">
        {!searchValue && <Button text="Load more posts" onClick={loadMorePosts} disabled={!hasMorePosts} />}
      </div>
    </section>
  );
};
