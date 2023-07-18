import Link from 'next/link';
import Avatar from '../ui/Avatar';
import DateComponent from '../ui/DateComponent';
import ContentfulImage from '../ui/ContentfulImage';

const PostCard = ({ post }) => {
  if (!post || !post.fields) {
    // Handle case when post or post.fields is undefined
    return null; // You can render a fallback component or return null to skip rendering
  }

  const { title, slug, excerpt, coverImage, author, date, externalUrl } = post.fields;

  return (
    <li className='rounded-md overflow-hidden shadow-md'>
    <div className='p-4'>

    <div className='post-header'>
       <span className='post-title'>
        <h1>{title}</h1>
        </span>

        <span className='post-externalurl'>
        {externalUrl && (
          <a href={externalUrl} target='_blank' rel='noopener noreferrer' className='mt-4 text-blue-500 underline'>
            Visit
          </a>
        )}
       </span>
      </div>

        <div className='text-sm mb-4 text-gray-400'>
          <span class='post-date'><DateComponent dateString={date} /></span>
        </div>
        <div className='post-excerpt'>
        <p className='text-base mb-4'>{excerpt}</p>
        </div>
        <div className='post-avatar'><Avatar name={author.fields.name} picture={author.fields.picture} /></div>
        
      </div>

      <div className='post-image'>
      <Link href={`/posts/${slug}`} aria-label={title}>
        <div className='mb-2'>
          <ContentfulImage
            alt={`Cover Image for ${title}`}
            src={coverImage.fields.file.url}
            width={coverImage.fields.file.details.image.width}
            height={coverImage.fields.file.details.image.height}
          />
        </div>
      </Link>
     </div>

    </li>
  );
};

export default PostCard;