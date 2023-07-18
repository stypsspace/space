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

     <div class="post-title">
        <h3 className='text-xl mb-1 leading-snug'>{title}</h3>
        </div>

        <div class="post-externalurl">
        {externalUrl && (
          <a href={externalUrl} target='_blank' rel='noopener noreferrer' className='mt-4 text-blue-500 underline'>
            Visit Website
          </a>
        )}
       </div>

        <div className='text-sm mb-4 text-gray-400'>
          <span class="post-date"><DateComponent dateString={date} /></span>
        </div>
        <div class="post-excerpt">
        <p className='text-base mb-4'>{excerpt}</p>
        </div>
        <div class="post-avatar"><Avatar name={author.fields.name} picture={author.fields.picture} /></div>
        
      </div>

      <div class="post-image">
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
