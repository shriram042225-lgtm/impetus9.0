// app/context/EraContext.tsx
"use client";

import { 
  createContext, 
  useContext, 
  useState, 
  useEffect, // Import useEffect
  ReactNode, 
  Dispatch, 
  SetStateAction 
} from "react";

type EraContextType = {
  currentEraIndex: number;
  setCurrentEraIndex: Dispatch<SetStateAction<number>>;
};

const EraContext = createContext<EraContextType | undefined>(undefined);

export function EraProvider({ children }: { children: ReactNode }) {
  const [currentEraIndex, setCurrentEraIndex] = useState(0);

  // --- LOGIC MOVED HERE ---
  // This ensures the cycle continues regardless of which page you are on.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEraIndex((prev) => (prev + 1) % 4); // Assuming 4 eras
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <EraContext.Provider value={{ currentEraIndex, setCurrentEraIndex }}>
      {children}
    </EraContext.Provider>
  );
}

export function useEra() {
  const context = useContext(EraContext);
  if (context === undefined) {
    throw new Error("useEra must be used within an EraProvider");
  }
  return context;
}