import { Link } from 'react-router-dom';

const AlbumCard = ({ album }) => (
  <div>
    <h4>{album.title}</h4>
    <Link className="text-gray-600 no-underline hover:text-black-700" to={`/album/${album.id}`}>
      View Album
    </Link>
  </div>
);

export default AlbumCard;
