import { createContext, useState } from "react";

export const LayoutContext = createContext({
  navOpen: false,
  setNavOpen: () => {},
});

export const LayoutContextProvider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <LayoutContext.Provider value={{ navOpen, setNavOpen }}>
      {children}
    </LayoutContext.Provider>
  );
};
