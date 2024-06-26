import React, { FC } from "react";
import User from "@/components/User/User";

const Users: FC = async () => {
  const users: IUser[] = await fetch(
    "https://jsonplaceholder.typicode.com/users",
  ).then((value) => value.json());

  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
