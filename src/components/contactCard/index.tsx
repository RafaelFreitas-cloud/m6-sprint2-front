import { useProvider } from "../../hooks/providerHook";
import { IContact } from "../../provider/@types";
import { StyledContactCard } from "./style";

export const ContactCard = (contact: IContact) => {
  const { contacts, setContacts, deleteContact, setEdit } = useProvider();

  const contactDelete = (id: number) => {
    deleteContact(id);
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  };

  return (
    <StyledContactCard>
      <h4>Nome</h4>
      <h3>{contact.name}</h3>
      <h4>E-mail</h4>
      <h3>{contact.email}</h3>
      <h4>Telefone</h4>
      <h3>{contact.phone}</h3>
      <div className="btn">
        <button className="upd" onClick={()=>setEdit(contact)}>Editar</button>
        <button className="del" onClick={() => contactDelete(contact.id)}>Deletar</button>
      </div>
    </StyledContactCard>
  );
};
