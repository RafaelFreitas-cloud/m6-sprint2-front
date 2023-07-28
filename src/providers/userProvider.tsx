import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  IUser,
  LoginResponse,
  UserContextValues,
  UserProviderProps,
} from "./@types";
import {
  TLoginData,
  TRegisterData,
  TUserUpdate,
} from "../validators/userValidators";

export const UserContext = createContext({} as UserContextValues);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState<IUser | null>(null);

  const userId = localStorage.getItem("@ContactHub:ID");
  const token = localStorage.getItem("@ContactHub:TOKEN");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@ContactHub:TOKEN");

    if (!token) {
      setLoading(false);
      return;
    }
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  const userProfile = async () => {
    if (token) {
      try {
        const response = await api.get(`/users/logged`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        navigate("/dashboard");
        setUser(response.data);
        localStorage.setItem("@ContactHub:ID", response.data.id);
        
      } catch (error) {
        console.log(error);
      }
    }
  };

  const userLogin = async (data: TLoginData) => {
    try {
      const response = await api.post<LoginResponse>("/login", data);

      const { token } = response.data;
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("@ContactHub:TOKEN", token);
      toast.success("Login com sucesso");
      setLoading(false);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Dados email/senha inválida");
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@ContactHub:TOKEN");
    navigate("/");
  };

  const userCreate = async (data: TRegisterData) => {
    try {
      const response = await api.post<IUser>("/users", data);
      setUser(response.data);
      
      toast.success("Cadastro com sucesso");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const userUpdate = async (data: TUserUpdate) => {
    if (token) {
      try {
        const response = await api.patch<IUser>(`/users/${userId}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
        toast.success("Atualização com sucesso");
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
        toast.error(`${error}`);
      }
    }
  };

  const userDelete = async () => {
    if (token) {
      try {
        const response = await api.delete<void>(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        toast.success("Usuário deletado");

        localStorage.removeItem("@ContactHub:TOKEN");
        localStorage.removeItem("@ContactHub:ID");
        navigate("/");
      } catch (error) {
        console.log(error);
        toast.error(`${error}`);
      }
    }
  };

  useEffect(() => {
    userProfile();
  }, [token]);

  const goToRegister = () => {
    navigate("/register");
  };

  const goToLogin = () => {
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        userLogin,
        userLogout,
        userProfile,
        userCreate,
        userUpdate,
        userDelete,
        goToLogin,
        goToRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
