import React, { createContext, useContext, useState } from "react";
import { mockUsers } from "@/data/mockData";

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, password, role) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Mock authentication
    const mockUser =
      mockUsers.find((u) => u.role === role) || {
        id: Date.now().toString(),
        name: email.split("@")[0],
        email,
        role,
      };

    setUser(mockUser);
    return true;
  };

  const register = async (name, email, password, role) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      role,
    };

    setUser(newUser);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
