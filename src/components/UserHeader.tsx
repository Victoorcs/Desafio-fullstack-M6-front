import { useState } from "react";
import { TUserResponseData } from "../shemas/userSchema";
import CreateContatoModal from "./CreateContatoModal";
import { ActionButton, HeaderContainer, HeaderTitle, LogoutButton } from "./UserHeaderStyle";
import { useAuth } from "../hooks/useAuth";


const UserHeader = (user: TUserResponseData) => {
    const { name } = user
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { signOut, } = useAuth()
    const openModal = () => {
        setIsModalOpen(true)
    };

    const closeModal = () => {
        setIsModalOpen(false)
    };

    return (
        <HeaderContainer>
            
                
            
            
                <HeaderTitle>Usuário:{name}</HeaderTitle>
            
            
            
            
                <ActionButton href="#" onClick={openModal}>
                    adicionar contato
                </ActionButton>
                <LogoutButton onClick={signOut}>Sair</LogoutButton>
            
            <CreateContatoModal isOpen={isModalOpen} onClose={closeModal} />
        </HeaderContainer>
    );
};

export default UserHeader