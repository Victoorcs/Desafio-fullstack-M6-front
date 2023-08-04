import { useAuth } from "../hooks/useAuth";
import { TContatoResponse } from "../shemas/contatoSchema";
import { ContactDetail, ContactItem, ContactList, ContactName, DeleteButton } from "./ListContatosStyle";



interface ListContactsProps {
    contatos: TContatoResponse[]
}

const ListContacts = ({ contatos }: ListContactsProps) => {
    const { deleteContato } = useAuth()

    const sortedContatos = contatos.slice().sort((a, b) => {
        return a.name.localeCompare(b.name)
    })

    return (
        <ContactList>
            <ul style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                {sortedContatos.map((contato) => (
                    <ContactItem key={contato.id}>
                        <ContactName>{contato.name}</ContactName>
                        <ContactDetail><strong>Email: </strong>{contato.email}</ContactDetail>
                        <ContactDetail><strong>Telefone: </strong>{contato.telefone}</ContactDetail>
                        <DeleteButton onClick={() => deleteContato(contato.id)}>Deletar</DeleteButton>
                    </ContactItem>
                ))}
            </ul>
        </ContactList>
    )
}

export default ListContacts