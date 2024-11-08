import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));

    fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="bg-white shadow-lg p-6 rounded-md">
      <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
      <p className="text-gray-700 mb-4">{user.email}</p>
      <h2 className="text-xl font-semibold mb-2">Albums</h2>
      <ul className="space-y-2">
        {albums.map((album) => (
          <li key={album.id}>
            <Link
              to={`/album/${album.id}`}
              className="text-black-600 no-underline hover:text-black-700 hover:font-bold"
            >
              {album.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserDetail;
