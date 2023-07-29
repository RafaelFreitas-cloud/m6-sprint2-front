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
  userLogin: (data: TLoginData) => Promise<void>;
  userLogout: () => void;
  userProfile: () => Promise<void>;
  userCreate: (data: TRegisterData) => Promise<void>;
  userUpdate: (data: TUserUpdate) => Promise<void>;
  userDelete: () => Promise<void>;
  goToRegister: () => void;
  goToLogin: () => void;
  contacts: IContact[];
  setContacts: React.Dispatch<React.SetStateAction<IContact[]>>;
  view: IContact | null;
  setView: React.Dispatch<React.SetStateAction<IContact | null>>;
  update: boolean;
  setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  createContact: (data: TContactCreateData) => Promise<void>;
  getContacts: () => Promise<void>;
  retrieveContact: () => Promise<void>;
  updateContact: (contactId: number, data: TContactUpdateData) => Promise<void>;
  deleteContact: (contactId: number) => Promise<void>;
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
