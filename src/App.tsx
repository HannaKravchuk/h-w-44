import React from 'react';
import Header from './components/Header';
import UserList from './components/UserList';

const App: React.FC = () => {
  return (
    <main className="container">
      <Header />
      <UserList />
    </main>
  );
};

export default App;
