import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  IContact,
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
import {
  TContactCreateData,
  TContactUpdateData,
} from "../validators/contactsCalidators";

export const UserContext = createContext({} as UserContextValues);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [edit, setEdit] = useState<IContact | null>(null);
  const [update, setUpdate] = useState<IUser | null>(null);
  const [delecao, setDelecao] = useState<IUser | null>(null);
  const [add, setAdd] = useState<boolean>(false);
  const [contMonitoration, setcontMonitoration] = useState<boolean>(false);

  const token = localStorage.getItem("@ContactHub:TOKEN");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@ContactHub:TOKEN");

    if (!token) {
      return;
    }
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
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

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Dados email/senha inválida");
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@ContactHub:TOKEN");
    localStorage.removeItem("@ContactHub:ID");
    navigate("/");
  };

  const userCreate = async (data: TRegisterData) => {
    try {
      const response = await api.post<IUser>("/users", data);
      console.log(response.data);

      toast.success("Cadastro com sucesso");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const userUpdate = async (userId: number, data: TUserUpdate) => {
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

  const userDelete = async (userId: number) => {
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

  const createContact = async (data: TContactCreateData) => {
    try {
      const response = await api.post<IContact>("/contacts", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setcontMonitoration(!contMonitoration)
      toast.success("Contato criado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const getContacts = async () => {
    try {
      const response = await api.get<IContact[]>("/contacts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setContacts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveContact = async () => {
    try {
      const response = await api.get<IContact>("/contacts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setEdit(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (contactId: number, data: TContactUpdateData) => {
    try {
      const response = await api.patch<IContact>(
        `/contacts/${contactId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setcontMonitoration(!contMonitoration)
      toast.success("Contato atualizado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const deleteContact = async (contactId: number) => {
    try {
      const response = await api.delete<IContact>(`/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setcontMonitoration(!contMonitoration)
      toast.success("Contato deletado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userLogin,
        userLogout,
        userProfile,
        userCreate,
        userUpdate,
        userDelete,
        goToLogin,
        goToRegister,
        contacts,
        setContacts,
        edit,
        setEdit,
        update,
        setUpdate,
        createContact,
        getContacts,
        retrieveContact,
        updateContact,
        deleteContact,
        delecao,
        setDelecao,
        add,
        setAdd,
        contMonitoration,
        setcontMonitoration,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
