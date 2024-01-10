import { useContext } from "react";
import { UserContext } from "../context/UserinfoContext";

const UserCard = () => {
  const data = useContext(UserContext);

  return (
    <>
      <h1>Name: {data.name}</h1>
      <h2>Username: {data.username}</h2>
    </>
  );
};

export default UserCard;
