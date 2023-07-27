import { ReactNode, createContext, useEffect/*, useState*/ } from "react";
import { TLoginData } from "../pages/login/validators";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValues {
  singIn: (data: TLoginData) => Promise<void>;
  // loading: boolean
}

interface LoginResponse {
  token: string;
}

export const AuthContext = createContext({} as AuthContextValues);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  // const [loading,setLoading] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("ContactHub:TOKEN");

    if (!token) {
      // setLoading(false)
      return;
    }
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    // setLoading(false)
  }, []);

  const singIn = async (data: TLoginData) => {
    try {
      const response = await api.post<LoginResponse>("login", data);

      const { token } = response.data;
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("ContactHub:TOKEN", token);
      toast.success("Login com sucesso");
      // setLoading(false)

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Dados email/senha inválida");
    }
  };

  return (
    <AuthContext.Provider value={{ singIn/*, loading*/ }}>{children}</AuthContext.Provider>
  );
};
