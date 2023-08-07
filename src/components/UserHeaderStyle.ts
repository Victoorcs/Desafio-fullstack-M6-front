import styled from 'styled-components';

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #6366f1;
    padding: 1rem;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    color:black;
`;

const ActionButton = styled.a`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
`;
const LogoutButton = styled.button`
    padding: 8px 16px;
    font-size: 14px;
    background-color: #f44336;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #d32f2f;
    }
`;


export{HeaderContainer,HeaderTitle,ActionButton,LogoutButton}