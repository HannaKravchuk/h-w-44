/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useMemo } from 'react';
import type { ReactNode } from 'react';

export interface User {
  id: number;
  name: string;
}

interface AppContextType {
  users: User[];
  addUser: (name: string) => void;
  removeUser: (id: number) => void;
}

const defaultValue: AppContextType = {
  users: [],
  addUser: () => {},
  removeUser: () => {}
};

export const AppContext = createContext<AppContextType>(defaultValue);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([
    { id: 2212, name: 'Hanna Kravchuk' },
    { id: 1712, name: 'Dmytro Pavlychko' }
  ]);

  const addUser = (name: string) => {
    setUsers((prev) => [...prev, { id: Date.now(), name }]);
  };

  const removeUser = (id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const contextValue = useMemo(() => ({
    users,
    addUser,
    removeUser
  }), [users]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
