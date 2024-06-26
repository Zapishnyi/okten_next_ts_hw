import React, { FC } from "react";

interface IProps {
  params: { userId: string };
}

const UserDetailsPage: FC<IProps> = async ({ params: { userId } }) => {
  console.log("userID:", userId);

  const {
    id,
    address: { street, geo, zipcode, suite, city },
    email,
    username,
    name,
  }: IUser = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  ).then((value) => value.json());
  console.log("id", id);
  return (
    <div>
      <p>User ID: {id}</p>
      <p>Name: {name}</p>
      <p>Username: {username}</p>
      <p>User Email: {email}</p>
      <p>User Address:</p>
      <div>
        <p>Street: {street}</p>
        <p>Suite: {suite}</p>
        <p>City: {city}</p>
        <p>Zipcode: {zipcode}</p>
        <p>Geo:</p>
        <div>
          <p>lat: {geo.lat}</p>
          <p>lng: {geo.lng}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
