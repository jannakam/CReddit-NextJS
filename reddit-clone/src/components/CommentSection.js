"use client"; // This must be at the very top of the file

import { useState } from 'react';

export default function CommentSection({ comments, onDeleteComment }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (commentId) => {
    setIsDeleting(true);
    try {
      await onDeleteComment(commentId); // Call the passed delete handler function
    } catch (error) {
      console.error('Error deleting comment:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div>
      <h3>Comments</h3>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map((comment) => (
          <div key={comment.id}>
            <p><strong>{comment.username}:</strong> {comment.text}</p>
            <button 
              onClick={() => handleDelete(comment.id)} 
              disabled={isDeleting}
            >
              {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        ))
      )}
    </div>
  );
}
