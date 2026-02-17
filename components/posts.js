"use client";

import Image from 'next/image';
import { useOptimistic } from 'react';

import { formatDate } from '@/lib/format';
import LikeButton from './like-icon';
import likePostStatus from '@/actions/like.js';

function ImageLoader({ src, quality }) {
  const urlStart = src.split('upload/')[0];
  const urlEnd = src.split('upload/')[1];
  const transformations = `w_400,q_${quality || 50}`;

  return `${urlStart}upload/${transformations}/${urlEnd}`;
}

function Post({ post, action, priority }) {
  return (
    <article className="post">
      <div className="post-image">
        <Image 
          loader={ImageLoader}
          src={post.image || null} 
          fill 
          sizes="(max-width: 600px) 100vw, 400px"
          alt={post.title} 
          priority={priority}
          loading={priority ? 'eager' : undefined}
        />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on{' '}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
            <form action={action.bind(null, post.id)} className={post.isLiked ? "liked" : ""}>
              <LikeButton />
            </form>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts }) {
  const [optimisticPosts, updateOptimisticPosts] = useOptimistic(posts, (prevPosts, updatedPostsId) => {
    const updatedPostsIndex = prevPosts.findIndex(post => post.id === updatedPostsId);

    if (updatedPostsIndex === -1) {
      return prevPosts;
    }

    const updatedPosts = { ...prevPosts[updatedPostsIndex] };
    updatedPosts.likes = updatedPosts.likes + (updatedPosts.isLiked ? -1 : 1);
    updatedPosts.isLiked = !updatedPosts.isLiked;
    
    const newPosts = [...prevPosts];
    newPosts[updatedPostsIndex] = updatedPosts;
    
    return newPosts;
  }); 

  if (!optimisticPosts || optimisticPosts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  async function updatePost(postId) {
    updateOptimisticPosts(postId);
    await likePostStatus(postId);
  }

  return (
    <ul className="posts">
      {optimisticPosts.map((post, index) => (
        <li key={post.id}>
          <Post post={post} action={updatePost} priority={index < 3} />
        </li>
      ))}
    </ul>
  );
}
