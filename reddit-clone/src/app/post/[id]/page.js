import { fetchPostById } from '../../../utils/actions';
import CommentSection from '../../../components/CommentSection';
import AddCommentModal from '@/components/CommentModal';
import CommentModal from '@/components/CommentModal';

export default async function PostDetail({ params }) {
  const { id } = await params; 
  const post = await fetchPostById(id); 

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className='flex flex-col justify-around w-1/3 bg-gray-300 text-gray-500 rounded-xl gap-5 m-10 p-10'>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <CommentSection comments={post.comments} />
      <CommentModal id={id} />
    </div>
  );
}
