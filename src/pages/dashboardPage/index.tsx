import { useEffect, useState } from "react"
import { NextPage } from "next";
import UserHeader from "../../components/UserHeader";

import { useAuth } from "../../hooks/useAuth";
import { TUserResponseData } from "../../shemas/userSchema";
import ListContacts from "../../components/ListContatos";
import { DashboardContainer, HeaderTitle, HeaderWrapper, ListWrapper } from "./style";




const DashboardPage: NextPage = () => {
    const [userData, setUserData] = useState<TUserResponseData | null>(null);
    const auth = useAuth();
    const contatos = auth.contatos;

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await auth.user();
                setUserData(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <DashboardContainer>
            <HeaderWrapper>
                <HeaderTitle>Dashboard</HeaderTitle>
                {userData && <UserHeader {...userData} />}
            </HeaderWrapper>
            <ListWrapper>
                {contatos && (
                    <ListContacts contatos={contatos} />
                )}
            </ListWrapper>
        </DashboardContainer>
    );
}

export default DashboardPage;

























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