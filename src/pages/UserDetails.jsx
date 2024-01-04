import { useEffect, useState } from "react";
import { useParams } from "react-router";

const UsersDetails = () => {
  const params = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    if (!params.userId) return;

    const getUser = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${params.userId}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await res.json();
        setUser(data);
      } catch (e) {
        console.error(e.message);
      }
    };

    getUser();
  }, [params.userId]);

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h3>Username: {user.username}</h3>
      <h4>Email: {user.email}</h4>
      <h5>Phone: {user.phone}</h5>
    </div>
  );
};

export default UsersDetails;
