import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await res.json();
        setUsers(data);
      } catch (e) {
        console.error(e.message);
      }
    };

    getUsers();
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <h3>{user.username}</h3>
            <Link to={`${user.id}`}>More info</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
