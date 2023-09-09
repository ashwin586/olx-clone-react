//One way of creating context
import { createContext, useState } from "react";

export const FirebaseContext = createContext(null);

//Another way of creating the context
export const AuthContext = createContext(null);

export function Context({ children }) {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
