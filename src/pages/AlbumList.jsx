import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AlbumList() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }, []);

  return (
    <div className="bg-white shadow-lg p-6 rounded-md">
      <h1 className="text-2xl font-bold mb-4">Albums</h1>
      <ul className="space-y-2">
        {albums.map((album) => (
          <li key={album.id}>
            <Link
              to={`/album/${album.id}`}
              className="text-black-400 no-underline hover:text-black-700 hover:font-bold"
            >
              {album.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;
