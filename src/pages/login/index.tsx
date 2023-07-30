import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useProvider } from "../../hooks/providerHook";
import { TLoginData, schemaLogin } from "../../validators/userValidators";
import { StyledLogin } from "./style";
import { FaEye } from "react-icons/fa";
import { useState } from "react";

export const Login = () => {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const { register, handleSubmit } = useForm<TLoginData>({
    resolver: zodResolver(schemaLogin),
  });

  const { userLogin, goToRegister } = useProvider();

  return (
    <StyledLogin>
      <h2>ContactHub</h2>

      <form onSubmit={handleSubmit(userLogin)}>
        <h3>Login</h3>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Digite seu e-mail..."
          {...register("email")}
        />
        <label htmlFor="password">Senha</label>
        <div>
          <input
            id="password"
            type={isHidden ? "password" : "text"}
            placeholder="Digite sua senha..."
            {...register("password")}
          />
          <FaEye className="eye" onClick={() => setIsHidden(!isHidden)} />
        </div>
        <button type="submit">Entrar</button>
        <p>Ainda não possui uma conta?</p>
        <button
          className="register"
          type="button"
          onClick={() => goToRegister()}
        >
          Cadastrar
        </button>
      </form>
    </StyledLogin>
  );
};
