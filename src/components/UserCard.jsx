import { Link } from 'react-router-dom';

const UserCard = ({ user }) => (
  <div>
    <h3>{user.name}</h3>
    <p>{user.email}</p>
    <Link className="text-gray-600 no-underline hover:text-black-700" to={`/user/${user.id}`}>
      View Details
    </Link>
  </div>
);

export default UserCard;
