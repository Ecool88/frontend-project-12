import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('token'));

  const signin = (newUser, cb) => {
    setUser(newUser);
    cb();
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>;
};
