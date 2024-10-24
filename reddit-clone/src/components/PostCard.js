import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <div className='flex flex-col justify-around'>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <Link href={`/post/${post.id}`}>View Comments</Link>
    </div>
  );
};

export default PostCard;
