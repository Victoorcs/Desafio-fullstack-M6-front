import styled from 'styled-components';

const ContactList = styled.div`
    margin-top: 20px;
`;

const ContactItem = styled.li`
    background-color: #f7fafc;
    border-radius: 0.375rem;
    padding: 1rem;
    margin: 0.5rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

const ContactName = styled.h3`
    font-weight: bold;
`;

const ContactDetail = styled.p`
    strong {
        font-weight: bold;
    }
`;

const DeleteButton = styled.button`
    background-color: #ef4444;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
        background-color: #dc2626;
    }
`;
export {ContactList,ContactItem,ContactName,ContactDetail,DeleteButton}