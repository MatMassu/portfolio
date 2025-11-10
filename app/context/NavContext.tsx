"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type NavOption = "sobremi" | "proyectos";
type NavContextType = {
  selected: NavOption;
  setSelected: (value: NavOption) => void;
};

const NavContext = createContext<NavContextType | undefined>(undefined);

export function NavProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<NavOption>("sobremi");

  return (
    <NavContext.Provider value={{ selected, setSelected }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNav must be used withing a NavProvider");
  }
  return context;
}
