import { client } from '@/lib/contentful/client';
import PostCard from '@/components/posts/PostCard';

const Portfolio = ({ posts }) => {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <ul>
        {posts.map((post) => (
          <PostCard key={post.fields.slug} post={post} />
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
    ...post.fields,
    slug: post.fields.slug || '',
  }));

  return {
    props: {
      posts,
    },
  };
}

export default Portfolio;
