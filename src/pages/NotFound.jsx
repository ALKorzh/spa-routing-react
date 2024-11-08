import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="text-center mt-12">
      <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
      <Link to="/" className="text-black-600 no-underline hover:text-black-700 hover:font-bold">
        Return to Home
      </Link>
    </div>
  );
}

export default NotFound;
