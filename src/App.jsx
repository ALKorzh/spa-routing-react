import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import UserList from './pages/UserList';
import AlbumList from './pages/AlbumList';
import UserDetail from './pages/UserDetail';
import AlbumDetail from './pages/AlbumDetail';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <div className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/albums" element={<AlbumList />} />
            <Route path="/user/:id" element={<UserDetail />} />
            <Route path="/album/:id" element={<AlbumDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <footer className="text-center py-4 border-t mt-4 text-gray-500">
          <p>Created by: Aliaksei Karzhou</p>
          <p>BSU: 2024</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
