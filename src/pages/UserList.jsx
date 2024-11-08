import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="bg-white shadow-lg p-6 rounded-md">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id}>
            <Link
              to={`/user/${user.id}`}
              className="text-black-400 no-underline hover:text-black-700 hover:font-bold"
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
