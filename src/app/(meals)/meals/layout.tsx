import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "metadata",
};

type Props = { children: React.ReactNode };

const DbUsersLayout = ({ children }: Props) => {
  return (
    <div>
      DB_users_layout
      {children}
    </div>
  );
};
export default DbUsersLayout;
