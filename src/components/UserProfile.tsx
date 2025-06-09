import React, { useContext } from 'react';
import type { User } from '../context/ContextApp';
import { AppContext } from '../context/ContextApp';

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const { removeUser } = useContext(AppContext);

  return (
    <div className="user-card">
      <p>
        <strong>ID:</strong> {user.id}
      </p>
      <p>
        <strong>Your name:</strong> {user.name}
      </p>
      <button onClick={() => removeUser(user.id)}>Remove</button>
    </div>
  );
};

export default UserProfile;
