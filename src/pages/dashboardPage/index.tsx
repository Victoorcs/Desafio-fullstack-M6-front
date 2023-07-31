import { useEffect, useState } from "react"
import  api  from "../../service/api"
import { Container } from "./style"



export interface Contato {
    id: string,
    name: string,
    telefone:number,
    
}

export const DashboardPage = () => {
    const [contato, setContato] = useState<Contato[]>([])

    useEffect(() => {
        (async () => {
            const response = await api.get<Contato[]>('contato')

            setContato(response.data)
        })()
    }, [])
    return (
        <>
         <Container>

            <h1>Dashboard</h1>
            <ul>
                {
                    contato.map((contato) => <li key={contato.id}>{contato.name}</li>)
                }
            </ul>
         </Container>
        </>
    )
}