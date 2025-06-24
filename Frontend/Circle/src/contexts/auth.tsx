import type { schemaAutRegisterhDTO } from "@/components/schemas/schemaAuthRegister";
import React, { createContext, useState } from "react";


interface AuthContextType {
  user: schemaAutRegisterhDTO;
  setUser: React.Dispatch<React.SetStateAction<schemaAutRegisterhDTO>>;
}
export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<schemaAutRegisterhDTO>({
    username: "no user",
    email: "-",
    password: "-",
  } as schemaAutRegisterhDTO);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};