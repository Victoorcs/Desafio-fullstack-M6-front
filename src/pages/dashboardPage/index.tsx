import { useEffect, useState } from "react"
import { NextPage } from "next";
import UserHeader from "../../components/UserHeader";
import ListContatos from "../../components/ListContatos";
import { useAuth } from "../../hooks/useAuth";
import { TUserResponseData } from "../../shemas/userSchema";




const DashboardPage: NextPage = () => {
    const [userData, setUserData] = useState<TUserResponseData | null>(null);
    const auth = useAuth();
    const contatos = auth.contatos

    useEffect(() => {
        const fetchUserData = () => {
            try {
                auth.user().then((data) => {
                    setUserData(data);
                });
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserData();
    }, []);
    return (
        <div>
            {userData && <UserHeader {...userData} />}
            {contatos && <ListContatos contatos={contatos}/>}
        </div>
    );
}

export default DashboardPage




















/*
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
}*/