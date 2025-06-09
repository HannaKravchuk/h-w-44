import React, { useContext, useState } from 'react';
import { AppContext } from '../context/ContextApp';
import UserProfile from './UserProfile';

const UserList: React.FC = () => {
  const { users, addUser } = useContext(AppContext);
  const [newUserName, setNewUserName] = useState('');

  const handleAddUser = () => {
    if (newUserName.trim()) {
      addUser(newUserName.trim());
      setNewUserName('');
    }
  };

  return (
    <section>
      <h2>User List</h2>
      <div className="user-input">
        <input
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          placeholder="Enter user name"
        />
        <button onClick={handleAddUser}>ADD USER</button>
      </div>
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        users.map((user) => <UserProfile key={user.id} user={user} />)
      )}
    </section>
  );
};

export default UserList;
