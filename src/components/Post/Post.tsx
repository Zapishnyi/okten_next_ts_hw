import React, { FC } from "react";
import Link from "next/link";

interface IProps {
  post: IPost;
}

const Post: FC<IProps> = ({ post: { userId, id, title } }) => {
  return (
    <div>
      frferf
      <Link href={`/posts/${id}`}>
        Post ID:{id}, User ID: {userId}, Post title: {title}
      </Link>
    </div>
  );
};

export default Post;
