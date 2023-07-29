import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  TContactCreateData,
  contactCreateSchema,
} from "../../../validators/contactsCalidators";
import { useProvider } from "../../../hooks/providerHook";
import { StyleModalWrapper } from "../../modalWrapper/style";
import { StyledCreateContactForm } from "./style";

export const CreateContactForm = () => {
  const { register, handleSubmit } = useForm<TContactCreateData>({
    resolver: zodResolver(contactCreateSchema),
  });

  const { setAdd, createContact } = useProvider();

  const submit = (data: TContactCreateData) => {
    createContact(data);
    setAdd(false);
  };

  return (
    <StyleModalWrapper>
      <StyledCreateContactForm>
        <div>
        <h2>Adicionar Contato</h2>
        <span onClick={()=>setAdd(false)}>X</span>
        </div>
        
        <form onSubmit={handleSubmit(submit)}>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" {...register("name")} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
          <label htmlFor="phone">Telefone</label>
          <input type="text" id="phone" {...register("phone")} />

          <button type="submit">ADICIONAR</button>
        </form>
      </StyledCreateContactForm>
    </StyleModalWrapper>
  );
};
