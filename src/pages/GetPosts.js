import React, { useContext, useEffect } from 'react';
import PostsContext from '../context/posts/postsContext';

export const GetPosts = () => {
  const postsContext = useContext(PostsContext);
  const { getPosts, posts } = postsContext;

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {posts &&
          posts.map((post) => {
            return <li key={post.id}>{post.title.rendered}</li>;
          })}
      </ul>
    </div>
  );
};
