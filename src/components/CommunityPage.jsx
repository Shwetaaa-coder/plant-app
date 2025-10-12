import React, { useState } from 'react';
import './CommunityPage.css';

const samplePosts = [
  {
    id: 1,
    user: 'Isabella G.',
    avatar: 'https://i.pravatar.cc/40?img=11',
    plant: 'Tomato',
    image: 'https://images.unsplash.com/photo-1587303031749-abc1c2d420d7?crop=entropy&cs=tinysrgb&fit=max&h=300&w=500',
    content: 'Harvested my first tomatoes of the season 🍅! Any tips on pruning late summer growth?',
    likes: 14,
    comments: 3,
  },
  {
    id: 2,
    user: 'Liam R.',
    avatar: 'https://i.pravatar.cc/40?img=33',
    plant: 'Aloe Vera',
    image: '',
    content: 'Aloe vera was turning brown. Switched to well-draining cactus soil and it bounced back! 🪴',
    likes: 8,
    comments: 1,
  }
];

const CommunityPage = () => {
  const [posts, setPosts] = useState(samplePosts);
  const [newPost, setNewPost] = useState('');
  const [newImage, setNewImage] = useState('');

  const handlePostSubmit = () => {
    if (!newPost.trim()) return;

    const newPostObj = {
      id: posts.length + 1,
      user: 'You',
      avatar: 'https://i.pravatar.cc/40?img=52',
      plant: 'Unknown',
      content: newPost,
      image: newImage,
      likes: 0,
      comments: 0
    };

    setPosts([newPostObj, ...posts]);
    setNewPost('');
    setNewImage('');
  };

  return (
    <div className="community-page">
      <h2>🌱 Gardening Community</h2>

      {/* Create New Post */}
      <div className="new-post">
        <textarea
          placeholder="Share your garden update or ask for help..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL (optional)"
          value={newImage}
          onChange={(e) => setNewImage(e.target.value)}
        />
        <button onClick={handlePostSubmit}>Post</button>
      </div>

      {/* Posts Feed */}
      <div className="post-feed">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <div className="post-header">
              <img src={post.avatar} alt={post.user} />
              <div>
                <strong>{post.user}</strong>
                <span>🪴 {post.plant}</span>
              </div>
            </div>
            <p>{post.content}</p>
            {post.image && <img className="post-image" src={post.image} alt="Post visual" />}
            <div className="post-actions">
              ❤️ {post.likes} Likes · 💬 {post.comments} Comments
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;
