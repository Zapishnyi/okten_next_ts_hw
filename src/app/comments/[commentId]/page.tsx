import React, { FC } from "react";

interface IProps {
  params: { commentId: string };
}

const CommentPage: FC<IProps> = async ({ params: { commentId } }) => {
  const { postId, name, id, email, body }: IComment = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${commentId}`,
  ).then((value) => value.json());
  return (
    <div>
      <p>Post ID: {postId}</p>
      <p>Comment ID: {id}</p>
      <p>Commentator email:{email}</p>
      <p>Comment title: {name}</p>
      <p>Comment body: {body}</p>
    </div>
  );
};

export default CommentPage;
