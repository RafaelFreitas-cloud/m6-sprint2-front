import { useForm } from "react-hook-form";
import { TLoginData, schemaLogin } from "./validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {
    const {register, handleSubmit} = useForm<TLoginData>({
        resolver: zodResolver(schemaLogin)
    })

    const {singIn} = useAuth()

  return (
    <main>
      <h2>Login</h2>

      <form onSubmit={handleSubmit(singIn)}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")}/>
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" {...register("password")}/>

        <button type="submit">Entrar</button>
      </form>
    </main>
  );
};
