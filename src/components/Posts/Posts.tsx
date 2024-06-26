import React, { FC } from "react";
import Post from "@/components/Post/Post";

const Posts: FC = async () => {
  const posts: IPost[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
  ).then((value) => value.json());
  return (
    <div>
      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
