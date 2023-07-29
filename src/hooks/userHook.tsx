import { useContext } from "react";
import { UserContext } from "../provider/Provider";

export const useUser = () => {
  const userContext = useContext(UserContext);

  return userContext;
};
