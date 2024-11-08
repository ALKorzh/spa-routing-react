import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function AlbumDetail() {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then((response) => response.json())
      .then((data) => setAlbum(data));

    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, [id]);

  if (!album) return <div>Loading...</div>;

  return (
    <div className="bg-white shadow-lg p-6 rounded-md">
      <h1 className="text-2xl font-bold mb-4">{album.title}</h1>
      <p className="text-gray-600 mb-4">
        Created by{' '}
        <Link
          to={`/user/${album.userId}`}
          className="text-black-600 no-underline hover:text-black-700 hover:font-bold"
        >
          {album.userId}
        </Link>
      </p>
      <div className="grid grid-cols-3 gap-4">
        {photos.map((photo) => (
          <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} className="rounded-md" />
        ))}
      </div>
    </div>
  );
}

export default AlbumDetail;
