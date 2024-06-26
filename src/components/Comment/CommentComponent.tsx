import React, { FC } from "react";
import Link from "next/link";

interface IProps {
  comment: IComment;
}

const CommentComponent: FC<IProps> = ({ comment: { id, postId, name } }) => {
  return (
    <div>
      <Link href={`/comments/${id}`}>
        {id} - Post ID:{postId} - {name}
      </Link>
    </div>
  );
};

export default CommentComponent;
