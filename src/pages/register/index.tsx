import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TRegisterData, schemaRegister } from "../../validators/userValidators";
import { useProvider } from "../../hooks/providerHook";

export const Register = () => {
  const { register, handleSubmit } = useForm<TRegisterData>({
    resolver: zodResolver(schemaRegister),
  });

  const { userCreate, goToLogin } = useProvider();

  return (
    <main>
      <h2>Register</h2>

      <form onSubmit={handleSubmit(userCreate)}>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" {...register("name")} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        <label htmlFor="phone">Telefone</label>
        <input type="text" id="phone" {...register("phone")} />
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" {...register("password")} />

        <button type="submit">CADASTRAR</button>
      </form>
      <div>
        Já tem conta,va para <button onClick={() => goToLogin()}>LOGIN</button>
      </div>
    </main>
  );
};
