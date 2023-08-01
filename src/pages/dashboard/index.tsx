import { ConfirmUserDelete } from "../../components/confirmUserDelete";
import { ContactCard } from "../../components/contactCard";
import { CreateContactForm } from "../../components/Foms/createContactFrom";
import { UpdateContactForm } from "../../components/Foms/updateContactForm";
import { UpdateUserForm } from "../../components/Foms/updateUserForm";
import { SearchInput } from "../../components/SearchInput";
import { useProvider } from "../../hooks/providerHook";
import { useEffect } from "react";
import { StyledDashboard } from "./style";

export const Dashboard = () => {
  const {
    user,
    userLogout,
    userProfile,
    contacts,
    getContacts,
    update,
    setUpdate,
    delecao,
    setDelecao,
    edit,
    add,
    setAdd,
    contMonitoration
  } = useProvider();

  useEffect(() => {
    getContacts();
  }, []);

  useEffect(() => {
    userProfile();
  }, [update]);

  useEffect(() => {
    getContacts();
  }, [add]);

  useEffect(() => {
    getContacts();
  }, [edit]);

  useEffect(() => {
    getContacts();
  }, [contMonitoration]);

  const quant = contacts.length;

  return (
    <StyledDashboard>
      {update ? <UpdateUserForm /> : null}
      {delecao ? <ConfirmUserDelete /> : null}
      {add ? <CreateContactForm /> : null}
      {edit ? <UpdateContactForm /> : null}

      <div className="border">
        <h2>ContactHub</h2>
        <button onClick={() => userLogout()}>Sair</button>
      </div>

      <div className="perfil border">
        <div className="info">
          <h3>{user?.name}</h3>
          <h4>{user?.email}</h4>
          <h4>{user?.phone}</h4>
        </div>
        <div className="userBtn">
          <button className="userUpd" onClick={() => setUpdate(user)}>
            Editar
          </button>
          <button className="userDel" onClick={() => setDelecao(user)}>
            Deletar
          </button>
        </div>
      </div>

      <div className="contacts border">
        <h3>Contatos - {quant}</h3>
        <button className="add" onClick={() => setAdd(true)}>Add</button>
      </div>

      <SearchInput />

      <ul className="list">
        {contacts.map((cont) => (
          <ContactCard
            key={cont.id}
            name={cont.name}
            email={cont.email}
            phone={cont.phone}
            createdAt={cont.createdAt}
            id={cont.id}
          />
        ))}
      </ul>
    </StyledDashboard>
  );
};
