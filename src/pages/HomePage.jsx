import React, { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';

const HomePage = () => {
  const [users, setUsers] = useState([]);

  // Fetch data on load
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data.map(user => ({ ...user, liked: false }))); // Add `liked` state
    };
    fetchUsers();
  }, []);

  const handleEdit = (id, updatedUser) => {
    setUsers(prev =>
      prev.map(user => (user.id === id ? { ...user, ...updatedUser } : user))
    );
  };

  const handleLike = id => {
    setUsers(prev =>
      prev.map(user => (user.id === id ? { ...user, liked: !user.liked } : user))
    );
  };

  const handleRemove = id => {
    setUsers(prev => prev.filter(user => user.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {users.map(user => (
          <UserCard
            key={user.id}
            user={user}
            onLike={handleLike}
            onEdit={handleEdit}
            onRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
