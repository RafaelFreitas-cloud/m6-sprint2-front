import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useProvider } from "../../../hooks/providerHook";
import {
  TContactUpdateData,
  contactUpdateSchema,
} from "../../../validators/contactsCalidators";
import { StyleModalWrapper } from "../../modalWrapper/style";
import { StyledUpdateContactForm } from "./style";

export const UpdateContactForm = () => {
  const { register, handleSubmit } = useForm<TContactUpdateData>({
    resolver: zodResolver(contactUpdateSchema),
  });

  const { setEdit, updateContact, edit } = useProvider();
  console.log(edit);

  const submit: SubmitHandler<TContactUpdateData> = (data) => {
    const nonEmptyData: Partial<TContactUpdateData> = {};
    for (const key in data) {
      if (data[key as keyof TContactUpdateData] !== "") {
        nonEmptyData[key as keyof TContactUpdateData] =
          data[key as keyof TContactUpdateData];
      }
    }

    if (edit) {
      updateContact(edit.id, data);
    }

    setEdit(null);
  };

  return (
    <StyleModalWrapper>
      <StyledUpdateContactForm>
        <div>
          <h3>Editar Contato</h3>
          <div onClick={() => setEdit(null)}>X</div>
        </div>

        <form onSubmit={handleSubmit(submit)}>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" {...register("name")} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
          <label htmlFor="phone">Telefone</label>
          <input type="text" id="phone" {...register("phone")} />

          <button type="submit">EDITAR</button>
        </form>
      </StyledUpdateContactForm>
    </StyleModalWrapper>
  );
};
