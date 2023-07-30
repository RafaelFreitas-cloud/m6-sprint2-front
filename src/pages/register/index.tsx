import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TRegisterData, schemaRegister } from "../../validators/userValidators";
import { useProvider } from "../../hooks/providerHook";
import { StyledRegister } from "./style";

export const Register = () => {
  const { register, handleSubmit } = useForm<TRegisterData>({
    resolver: zodResolver(schemaRegister),
  });

  const { userCreate, goToLogin } = useProvider();

  return (
    <StyledRegister>
      <h2>ContactHub</h2>

      <form onSubmit={handleSubmit(userCreate)}>
        <h3>Cadastrar</h3>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" placeholder="Digite seu nome..." {...register("name")} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Digite seu e-mail..." {...register("email")} />
        <label htmlFor="phone">Telefone</label>
        <input type="text" id="phone" placeholder="Digite seu telefone..." {...register("phone")} />
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" placeholder="Digite sua senha..." {...register("password")} />
        <button type="submit">CADASTRAR</button>
        <p>Jápossui uma conta? Gerencie seus contatos...</p>
        <button className="register" type="button" onClick={() => goToLogin()}>
          Página de Login
        </button>
      </form>
    </StyledRegister>
  );
};
