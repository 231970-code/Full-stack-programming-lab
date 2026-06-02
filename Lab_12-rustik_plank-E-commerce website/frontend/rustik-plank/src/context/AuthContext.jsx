"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { loginUser, registerUser } from "@/lib/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("rustik_user");
    if (stored) setUser(JSON.parse(stored));
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const data = await loginUser(email, password);
    if (data.token) {
      setUser(data);
      localStorage.setItem("rustik_user", JSON.stringify(data));
      return { success: true };
    }
    return { success: false, message: data.message };
  };

  const register = async (name, email, password) => {
    const data = await registerUser(name, email, password);
    if (data.token) {
      setUser(data);
      localStorage.setItem("rustik_user", JSON.stringify(data));
      return { success: true };
    }
    return { success: false, message: data.message };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("rustik_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}