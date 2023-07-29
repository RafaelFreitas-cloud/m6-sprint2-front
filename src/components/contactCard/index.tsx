import { useProvider } from "../../hooks/providerHook";
import { IContact } from "../../provider/@types";
import { StyledContactCard } from "./style";

export const ContactCard = (contact: IContact) => {
  const { contacts, setContacts, deleteContact } = useProvider();

  const contactDelete = (id: number) => {
    deleteContact(id);
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  };

  return (
    <StyledContactCard>
      <h5>Nome</h5>
      <h2>{contact.name}</h2>
      <h5>E-mail</h5>
      <h3>{contact.email}</h3>
      <h5>Telefone</h5>
      <h3>{contact.phone}</h3>
      <div>
        <button>Editar</button>
        <button onClick={() => contactDelete(contact.id)}>Deletar</button>
      </div>
    </StyledContactCard>
  );
};
