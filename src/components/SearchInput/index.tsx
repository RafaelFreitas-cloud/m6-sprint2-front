
import { useState } from "react";
import { useProvider } from "../../hooks/providerHook";
import { toast } from "react-toastify";

export const SearchInput = () => {

  const {contacts, setContacts, getContacts} = useProvider()

  const [searchedItem, setSearchedItem] = useState<string>("");
  const [searchWord, setSearchWord] = useState<string>("");

const reset = () => {
  getContacts()
}

  const search = (wordToSearch:string) => {
    if (wordToSearch === "") {
      toast.error("Digite alguma busca");
    } else {
      const searchedContact = contacts.filter((contact) => {
        return (
          contact.name.toLowerCase().includes(wordToSearch.toLowerCase()) ||
          contact.email.toLowerCase().includes(wordToSearch.toLowerCase())
        );
      });
      setContacts(searchedContact);
    }
  }
  
  const submit = (e:any) => {
    e.preventDefault();

    setSearchWord(searchedItem);
    search(searchedItem);
    setSearchedItem("");
  }

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={searchedItem}
        placeholder="Digitar pesquisa"
        onChange={(e) => setSearchedItem(e.target.value)}
      />
      <button type="submit">Pesquisar</button>
      <button type="reset" onClick={()=>reset()}>Todos</button>
    </form>
  );
}


