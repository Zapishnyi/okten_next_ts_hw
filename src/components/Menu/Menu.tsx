import React, { FC } from "react";
import Link from "next/link";

const Menu: FC = () => {
  return (
    <ul>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/users"}>Users</Link>
      </li>
      <li>
        <Link href={"/posts"}>Posts</Link>
      </li>
      <li>
        <Link href={"/comments"}>Comments</Link>
      </li>
    </ul>
  );
};

export default Menu;
