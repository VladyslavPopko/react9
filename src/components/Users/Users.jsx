import { useEffect, useState } from "react";
import UserCard from './UserCard';

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {

        const getUsers = async () => {
            try {
                const res = await fetch('https://659156f48cbbf8afa96c1892.mockapi.io/homework');
            
            if (!res.ok) {
                throw new Error("Failed to fetch");
            }
            
            const data = await res.json();
            setUsers(data);
        } catch (e){
            console.error(e.message);
        }
        };

        getUsers();

    }, []);

    return (
        <>

        {users.map(user => <UserCard userData={user} key={user.id}/>) }

        </>
    )

}
{/*  */}
export default Users;