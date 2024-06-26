import React from "react";
import { Metadata } from "next";

interface IProps {
  params: { commentId: string };
}

export const generateMetadata = async ({
  params: { commentId },
}: IProps): Promise<Metadata> => {
  const { email }: IComment = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${commentId}`,
  ).then((value) => value.json());
  return { title: ` ${email}` };
};

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  return <div>{children}</div>;
};
export default Layout;
