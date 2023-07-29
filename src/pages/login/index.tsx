import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useProvider } from "../../hooks/providerHook";
import { TLoginData, schemaLogin } from "../../validators/userValidators";

export const Login = () => {
  const { register, handleSubmit } = useForm<TLoginData>({
    resolver: zodResolver(schemaLogin),
  });

  const { userLogin, goToRegister } = useProvider();

  return (
    <main>
      <h2>Login</h2>

      <form onSubmit={handleSubmit(userLogin)}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" {...register("password")} />

        <button type="submit">Entrar</button>
      </form>
      <div>
        Não tem conta,{" "}
        <button onClick={() => goToRegister()}>CLICK AQUI</button>
      </div>
    </main>
  );
};
