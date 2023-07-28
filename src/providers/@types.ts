import { ReactNode } from "react";
import {
  TLoginData,
  TRegisterData,
  TUserUpdate,
} from "../validators/userValidators";

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
  loading: boolean;
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

  export interface UserContextValues {
    userLogin: (data: TLoginData) => Promise<void>;
    // loading: boolean
  }