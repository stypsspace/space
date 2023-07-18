import { client } from '@/lib/contentful/client';
import { useRouter } from 'next/router';
import PostCard from '@/components/posts/PostCard';
import Skeleton from '@/components/ui/Skeleton';
import PostHeader from '@/components/posts/PostHeader';
import PostBody from '@/components/posts/PostBody';

const Post = ({ post, morePosts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Skeleton />; // Display skeleton loading while fetching post data
  }

  return (
    <section className="section">
      <div className="container">
        <article className="prose mx-auto">
          <PostHeader post={post} />
          <PostBody post={post} />
        </article>
      </div>

      <div className="more-posts-wrap">
        <div className="more-posts-header">
          <h2>More Posts</h2>
        </div>
        <div className="more-posts-content">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 sm:gap-10">
            {morePosts.map((post) => (
              <PostCard key={post.fields.slug} post={post} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export const getStaticProps = async ({ params, preview = false }) => {
  const { slug } = params;
  const response = await client.getEntries({
    content_type: 'post',
    'fields.slug': slug,
    include: 1
  });

  if (!response.items.length) {
    return {
      redirect: {
        destination: '/posts',
        permanent: false
      }
    };
  }

  const post = response.items[0];
  const category = post.fields.category;

  const morePostsResponse = await client.getEntries({
    content_type: 'post',
    'fields.category': category,
    'fields.slug[nin]': slug,
    limit: 5,
    order: '-sys.createdAt'
  });

  const morePosts = morePostsResponse.items;

  return {
    props: {
      post,
      morePosts,
      preview: preview || false,
      revalidate: 60
    }
  };
};

export const getStaticPaths = async () => {
  const response = await client.getEntries({ content_type: 'post' });
  const paths = response.items.map((item) => ({
    params: { slug: item.fields.slug }
  }));

  return {
    paths,
    fallback: true
  };
};

export default Post;
