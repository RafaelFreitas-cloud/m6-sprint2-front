import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { IContact } from "../../providers/@types";
import { useUser } from "../../hooks/userHook";

export const Dashboard = () => {
  const { user, userLogout } = useUser();
  const [contacts, setContacts] = useState<IContact[]>([]);

  useEffect(() => {
    (async () => {
      const response = await api.get<IContact[]>("/contacts");

      setContacts(response.data);
    })();
  }, []);

  return (
    <>
      <aside>
        <div>
          <button onClick={() => userLogout()}>Logout</button>
        </div>
        <div>
          <button>Editar Perfil</button>
          <button>Deletar Conta</button>
        </div>
        <div>
          <h1>{user?.name}</h1>
          <h2>{user?.email}</h2>
          <h2>{user?.phone}</h2>
        </div>
      </aside>
      <main>
        <h1>Contatos</h1>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </main>
    </>
  );
};
