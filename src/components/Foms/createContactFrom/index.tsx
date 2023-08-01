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
        <form onSubmit={handleSubmit(submit)}>
          <div className="header">
            <h3>Adicionar Contato</h3>
            <span onClick={() => setAdd(false)}>X</span>
          </div>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" placeholder="Digite o nome..." {...register("name")} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Digite o e-mail..." {...register("email")} />
          <label htmlFor="phone">Telefone</label>
          <input type="text" id="phone" placeholder="Digite o telefone..." {...register("phone")} />

          <button className="btnForm" type="submit">ADICIONAR</button>
        </form>
      </StyledCreateContactForm>
    </StyleModalWrapper>
  );
};
