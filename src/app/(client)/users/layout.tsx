import React from "react";
import { Metadata } from "next";

type Props = { children: React.ReactNode };

export const metadata: Metadata = {
  title: "Users List",
  description: "Users",
};

const UsersLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};
export default UsersLayout;
