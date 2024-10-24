"use client"; // Client Component

import { useRouter } from 'next/navigation';
import { addComment } from '../utils/actions.js'

export default function CommentModal({ id }) {
  const router = useRouter(); // To navigate after the comment is added

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = e.target.username.value; // Get the username from the form
    const text = e.target.text.value; // Get the comment text from the form

    // Add the comment using the API
    await addComment(id, { username, text });

    // Navigate back to the post page after adding the comment
    router.push(`/post/${id}`);
  };

  return (
    <div className="mt-10 flex flex-col justify-center">
      <h2>Leave a Comment!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
          className='w-full'
            type="text"
            name="username"
            required
          />
        </label>
        <label>
          Comment:
          <textarea
          className='w-full'
            name="text"
            required
          />
        </label>
        <div className='flex flex-ow justify-between'>
        <button type="submit">Add Comment</button>
        <button type="button" onClick={() => router.back()}>
          Cancel
        </button>
        </div>
      </form>
    </div>
  );
}

