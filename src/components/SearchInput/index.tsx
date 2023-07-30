import { useState } from "react";
import { useProvider } from "../../hooks/providerHook";
import { toast } from "react-toastify";
import { StyledSearchInput } from "./style";

export const SearchInput = () => {
  const { contacts, setContacts, getContacts } = useProvider();

  const [searchedItem, setSearchedItem] = useState<string>("");

  const reset = () => {
    getContacts();
  };

  const search = (searchedItem: string) => {
    if (searchedItem === "") {
      toast.error("Digite alguma busca...");
    } else {
      const searchedContact = contacts.filter((contact) => {
        return (
          contact.name.toLowerCase().includes(searchedItem.toLowerCase()) ||
          contact.email.toLowerCase().includes(searchedItem.toLowerCase())
        );
      });
      setContacts(searchedContact);
    }
  };

  const submit = (e: any) => {
    e.preventDefault();

    search(searchedItem);
    setSearchedItem("");
  };

  return (
    <StyledSearchInput>
      <form onSubmit={submit}>
        <input
          type="text"
          value={searchedItem}
          placeholder="Digitar pesquisa"
          onChange={(e) => setSearchedItem(e.target.value)}
        />
        <div>
          <button type="submit">Buscar</button>
          <button type="reset" onClick={() => reset()}>
            Todos
          </button>
        </div>
      </form>
    </StyledSearchInput>
  );
};
