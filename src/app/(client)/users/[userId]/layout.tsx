import React from "react";
import { Metadata } from "next";

interface IProps {
  params: { userId: string };
}

export const generateMetadata = async ({
  params: { userId },
}: IProps): Promise<Metadata> => {
  const { name }: IUser = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  ).then((value) => value.json());
  return { title: `User ${name}` };
};

type Props = { children: React.ReactNode };

const ChosenUserLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};
export default ChosenUserLayout;
