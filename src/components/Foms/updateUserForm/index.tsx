import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  schemaUserUpdate,
  TUserUpdate,
} from "../../../validators/userValidators";

import { useProvider } from "../../../hooks/providerHook";
import { StyledUpdateUseForm } from "./style";
import { StyleModalWrapper } from "../../modalWrapper/style";

export const UpdateUserForm = () => {
  const { register, handleSubmit } = useForm<TUserUpdate>({
    resolver: zodResolver(schemaUserUpdate),
  });

  const { user, setUpdate, userUpdate } = useProvider();

  const submit: SubmitHandler<TUserUpdate> = (data) => {
    const nonEmptyData: Partial<TUserUpdate> = {};
    for (const key in data) {
      if (data[key as keyof TUserUpdate] !== "") {
        nonEmptyData[key as keyof TUserUpdate] = data[key as keyof TUserUpdate];
      }
    }

    if (user) {
  
      userUpdate(user.id, nonEmptyData as TUserUpdate);
    }

    setUpdate(null);
  };

  return (
    <StyleModalWrapper>
      <StyledUpdateUseForm>
        
        
        
        <form onSubmit={handleSubmit(submit)}>
        <div className="header">
          <h3>Editar Usuário</h3>
          <span onClick={() => setUpdate(null)}>X</span>
        </div>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" placeholder="Digite seu nome..." {...register("name")} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Digite seu e-mail..." {...register("email")} />
          <label htmlFor="phone">Telefone</label>
          <input type="text" id="phone" placeholder="Digite seu telefone..." {...register("phone")} />
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="Digite sua senha..." {...register("password")} />

          <button className="btnForm" type="submit">EDITAR</button>
        </form>
        
      </StyledUpdateUseForm>
    </StyleModalWrapper>
  );
};
