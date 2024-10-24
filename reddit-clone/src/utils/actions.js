const API_URL = 'https://api-creddit.eapi.joincoded.com/posts';

// Fetch all posts
export const fetchPosts = async () => {
  const res = await fetch(`${API_URL}`);
  const data = await res.json();
  return data;
};

// Fetch a specific post by its ID
export const fetchPostById = async (postId) => {
  const res = await fetch(`${API_URL}/${postId}`);
  const data = await res.json();
  return data;
};

// Delete a post by its ID
export const deletePost = async (postId) => {
  await fetch(`${API_URL}/${postId}`, { method: 'DELETE' });
};

// Create a new post
export const createPost = async (post) => {
    const res = await fetch(`${API_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    });
    const data = await res.json();
    return data;
  };

// Add a comment to a specific post
export const addComment = async (postId, comment) => {
  const res = await fetch(`${API_URL}/${postId}/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(comment),
  });
  const data = await res.json();
  return data;
};

// Delete a comment by its ID
export const deleteComment = async (postId, commentId) => {
  await fetch(`${API_URL}/${postId}/comments/${commentId}`, { method: 'DELETE' });
};
