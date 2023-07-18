import { client } from '@/lib/contentful/client';
import PostCard from '@/components/posts/PostCard';

const Personal = ({ posts }) => {
  return (
    <div class="category-container-wrap">
      <h1>Personal Page</h1>
      <ul class="category-container">
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
    'fields.category': 'Personal',
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

export default Personal;
