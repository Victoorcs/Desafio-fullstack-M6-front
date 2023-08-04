import { useState } from "react";
import { TUserResponseData } from "../shemas/userSchema";
import CreateContatoModal from "./CreateContatoModal";
import { ActionButton, HeaderContainer, HeaderTitle } from "./UserHeaderStyle";



const UserHeader = (user: TUserResponseData) => {
    const { name } = user
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    };

    const closeModal = () => {
        setIsModalOpen(false)
    };

    return (
        <HeaderContainer>
            <div>
                <HeaderTitle>{name}</HeaderTitle>
            </div>
            <div>
                <HeaderTitle>Usuário</HeaderTitle>
            </div>
            <div>
                <ActionButton href="#" onClick={openModal}>
                    +
                </ActionButton>
            </div>
            <CreateContatoModal isOpen={isModalOpen} onClose={closeModal} />
        </HeaderContainer>
    );
};

export default UserHeader