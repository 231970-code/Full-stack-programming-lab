import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { loginUser, registerUser } from '../lib/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user,    setUser]    = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // On app load, restore user from localStorage
  useEffect(() => {
    const token    = localStorage.getItem('crm_token');
    const userData = localStorage.getItem('crm_user');
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const { data } = await loginUser({ email, password });
    localStorage.setItem('crm_token', data.token);
    localStorage.setItem('crm_user',  JSON.stringify(data.user));
    setUser(data.user);
    router.push('/dashboard');
    return data;
  };

  const register = async (name, email, password) => {
    const { data } = await registerUser({ name, email, password });
    localStorage.setItem('crm_token', data.token);
    localStorage.setItem('crm_user',  JSON.stringify(data.user));
    setUser(data.user);
    router.push('/dashboard');
    return data;
  };

  const logout = () => {
    localStorage.removeItem('crm_token');
    localStorage.removeItem('crm_user');
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};
