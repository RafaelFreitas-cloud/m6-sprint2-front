import { ConfirmUserDelete } from "../../components/confirmUserDelete";
import { ContactCard } from "../../components/contactCard";
import {
  CreateContactForm,
} from "../../components/Foms/createContactFrom";
import { UpdateContactForm } from "../../components/Foms/updateContactForm";
import { UpdateUserForm } from "../../components/Foms/updateUserForm";
import { SearchInput } from "../../components/SearchInput"
import { useProvider } from "../../hooks/providerHook";
import { useEffect } from "react";

export const Dashboard = () => {
  const {
    user,
    userLogout,
    contacts,
    getContacts,
    update,
    setUpdate,
    delecao,
    setDelecao,
    edit,
    add,
    setAdd,
  } = useProvider();

  useEffect(() => {
    getContacts();
  }, []);

  useEffect(() => {
    getContacts();
  }, [update]);

  useEffect(() => {
    getContacts();
  }, [add]);

  useEffect(() => {
    getContacts();
  }, [edit]);

  const quant = contacts.length;

  return (
    <>
      {update ? <UpdateUserForm /> : null}
      {delecao ? <ConfirmUserDelete /> : null}
      {add ? <CreateContactForm /> : null}
      {edit ? <UpdateContactForm /> : null}
      <aside>
        <div>
          <button onClick={() => userLogout()}>Logout</button>
        </div>
        <div>
          <button onClick={() => setUpdate(user)}>Editar Perfil</button>
          <button onClick={() => setDelecao(user)}>Deletar Conta</button>
        </div>

        <div>
          <h1>{user?.name}</h1>
          <h2>{user?.email}</h2>
          <h2>{user?.phone}</h2>
        </div>
      </aside>
      <main>
        <div>
          <h1>Contatos - {quant}</h1>
          <button onClick={() => setAdd(true)}>add</button>
        </div>

        <SearchInput/>

        <ul>
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
      </main>
    </>
  );
};
