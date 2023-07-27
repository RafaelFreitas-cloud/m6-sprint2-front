import { useEffect, useState } from "react"
import { api } from "../../services/api"

export interface Contact {
    id: number,
    name: string,
    email: string,
    phone: string,
}

export const Dashboard = () => {
    const [contacts, setContacts] = useState<Contact[]>([])

    useEffect(()=>{
        (async ()=> {
            const response = await api.get<Contact[]>("/contacts")

            setContacts(response.data)
        })
    },[])

    return (
        <>
        <h1>Dashboard</h1>
        <ul>
            {
                contacts.map(contact =><li key={contact.id}>{contact.name}</li>)
            }
        </ul>
        </>

    )
}