import React, { FC } from "react";
import CommentComponent from "@/components/Comment/CommentComponent";

const Comments: FC = async () => {
  const comments: IComment[] = await fetch(
    "https://jsonplaceholder.typicode.com/comments",
  ).then((value) => value.json());
  return (
    <div>
      {comments.map((comment) => (
        <CommentComponent key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
