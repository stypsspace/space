import React from 'react'
import Avatar from '../ui/Avatar'
import ContentfulImage from '../ui/ContentfulImage'
import DateComponent from '../ui/DateComponent'

const PostHeader = ({ post }) => {
  const { title, coverImage, author, date, externalUrl } = post.fields

  return (
    <>
      
      <div className="post-header">
      <span className="post-title">
      <h1>{title}</h1>
      </span>
      <span className="post-externalurl">
      {externalUrl && (
        <a href={externalUrl} target="_blank" rel="noopener noreferrer">
          <button>Visit</button>
        </a>
      )}
    </span>
    </div>

      <div className='hidden md:flex md:justify-between md:items-center md:mb-10'>
       
       
      <span className="post-avatar"><Avatar name={author.fields.name} picture={author.fields.picture} /></span>
        <span className="post-date"><DateComponent dateString={date} className='text-sm text-gray-400' /></span>
      
      
      </div>

      <div className="post-image">
      <div className='mb-8 md:mb-16 sm:mx-0'>
        <ContentfulImage
          alt={`Cover Image for ${title}`}
          src={coverImage.fields.file.url}
          width={coverImage.fields.file.details.image.width}
          height={coverImage.fields.file.details.image.height}
        />
      </div>
      </div>

      <div className='flex justify-between items-center md:hidden mb-6'>
      <span className="post-avatar"><Avatar name={author.fields.name} picture={author.fields.picture} /></span>
      <span className="post-date"><DateComponent dateString={date} className='text-sm text-gray-400' /></span>
      </div>
    </>
  )
}

export default PostHeader
