import { useContext } from "react";
import { UserContext } from "../provider/Provider";

export const useProvider = () => {
  const providerContext = useContext(UserContext);

  return providerContext;
};
