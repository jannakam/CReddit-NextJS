import PostCard from '../components/PostCard';
import { fetchPosts } from '../utils/actions';

export default async function Home() {
  const posts = await fetchPosts(); // Fetch all posts

  return (
    <div className='flex flex-col justify-around w-1/3 bg-gray-300 text-gray-500 rounded-xl gap-5 m-10 p-10'>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      {posts.length === 0 && <p>No posts found.</p>}
    </div>
  );
}
