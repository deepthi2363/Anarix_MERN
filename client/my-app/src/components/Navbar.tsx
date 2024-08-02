import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">User Management</div>
        <div>
          <Link to="/" className="mx-4 hover:text-gray-300">Home</Link>
          <Link to="/register" className="mx-4 hover:text-gray-300">Register</Link>
          <Link to="/login" className="mx-4 hover:text-gray-300">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
