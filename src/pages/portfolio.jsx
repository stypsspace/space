import { client } from '@/lib/contentful/client';
import PostCard from '@/components/posts/PostCard';

const Portfolio = ({ posts }) => {
  return (
    <div className="category-container-wrap">
      <h1>Portfolio Page</h1>
      <ul className="category-container">
        {posts.map((post) => (
          <PostCard key={post.sys.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const response = await client.getEntries({
    content_type: 'post',
    'fields.category': 'Portfolio',
  });

  const posts = response.items.map((post) => ({
    sys: post.sys,
    fields: post.fields,
  }));

  return {
    props: {
      posts,
    },
  };
}

export default Portfolio;
