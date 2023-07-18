import { client } from '@/lib/contentful/client';
import PostCard from '@/components/posts/PostCard';
import { useState } from 'react';

const Posts = ({ posts }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredPosts = selectedFilter === 'All' ? posts : posts.filter(post => post.fields.category === selectedFilter);

  return (
    <section className='section'>
      <div className='container'>
        <div className='filter-container'>
          <button className={selectedFilter === 'All' ? 'active' : ''} onClick={() => handleFilterSelect('All')}>
            All
          </button>
          <button className={selectedFilter === 'Portfolio' ? 'active' : ''} onClick={() => handleFilterSelect('Portfolio')}>
            Portfolio
          </button>
          <button className={selectedFilter === 'Commerce' ? 'active' : ''} onClick={() => handleFilterSelect('Commerce')}>
            Commerce
          </button>
          <button className={selectedFilter === 'Personal' ? 'active' : ''} onClick={() => handleFilterSelect('Personal')}>
            Personal
          </button>
          <button className={selectedFilter === 'App' ? 'active' : ''} onClick={() => handleFilterSelect('App')}>
            App
          </button>
        </div>

        <ul className='category-container'>
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: 'post' });

  const posts = response.items.map((post) => ({
    fields: {
      ...post.fields,
      externalUrl: post.fields.externalUrl || '', // Add externalUrl field with a fallback value
    },
  }));

  return {
    props: {
      posts,
      revalidate: 60,
    },
  };
};

export default Posts;
