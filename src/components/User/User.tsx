import React, { FC } from "react";
import Link from "next/link";

interface IProps {
  user: IUser;
}

const User: FC<IProps> = ({ user: { id, name } }) => {
  return (
    <div>
      <Link href={`/users/${id.toString()}`}>
        {" "}
        User ID :{id}, User Name : {name}
      </Link>
    </div>
  );
};

export default User;
