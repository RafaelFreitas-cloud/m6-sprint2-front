import { createContext } from "react";
import { ContactProviderProps } from "./@types";



export const ContactContext = createContext({});
// export const ContactContext = createContext({} as ContactContextValues);

export const ContactProvider = ({ children }: ContactProviderProps) => {
//   const [loading,setLoading] = useStat(true)




  return (
    <ContactContext.Provider value={{  }}>{children}</ContactContext.Provider>
  );
};