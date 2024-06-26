import React, { FC } from "react";

interface IProps {
  params: { postId: string };
}

const PostDetails: FC<IProps> = async ({ params: { postId } }) => {
  const { userId, id, body, title }: IPost = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  ).then((value) => value.json());
  return (
    <div>
      <p>User ID: {userId}</p>
      <p>Post ID: {id}</p>
      <p>Post title: {title}</p>
      <p>Post body: {body}</p>
    </div>
  );
};

export default PostDetails;
