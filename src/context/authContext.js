"use client";

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [role, setRole] = useState(null);

  const login = (address, userRole) => {
    setWalletAddress(address);
    setRole(userRole);
  };

  const logout = () => {
    setWalletAddress(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ walletAddress, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
