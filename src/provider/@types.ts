import { ReactNode } from "react";
import {
  TLoginData,
  TRegisterData,
  TUserUpdate,
} from "../validators/userValidators";
import {
  TContactCreateData,
  TContactUpdateData,
} from "../validators/contactsCalidators";

export interface UserProviderProps {
  children: ReactNode;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

export interface LoginResponse {
  token: string;
}

export interface UserContextValues {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  update: IUser | null
  setUpdate: React.Dispatch<React.SetStateAction<IUser | null>>
  userLogin: (data: TLoginData) => Promise<void>;
  userLogout: () => void;
  userProfile: () => Promise<void>;
  userCreate: (data: TRegisterData) => Promise<void>;
  userUpdate: (userId: number, data: TUserUpdate) => Promise<void>
  userDelete: (userId: number) => Promise<void>;
  goToRegister: () => void;
  goToLogin: () => void;
  
  contacts: IContact[];
  setContacts: React.Dispatch<React.SetStateAction<IContact[]>>;
  edit: IContact | null;
  setEdit: React.Dispatch<React.SetStateAction<IContact | null>>;
  createContact: (data: TContactCreateData) => Promise<void>;
  getContacts: () => Promise<void>;
  retrieveContact: () => Promise<void>;
  updateContact: (contactId: number, data: TContactUpdateData) => Promise<void>;
  deleteContact: (contactId: number) => Promise<void>;
  delecao: IUser | null
  setDelecao: React.Dispatch<React.SetStateAction<IUser | null>>
  add: boolean
  setAdd: React.Dispatch<React.SetStateAction<boolean>>
  contMonitoration: boolean
  setcontMonitoration: React.Dispatch<React.SetStateAction<boolean>>
}


export interface ContactProviderProps {
  children: ReactNode;
}

export interface IContact {
  id: number;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}
