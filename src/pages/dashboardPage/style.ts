import styled from 'styled-components';

export const DashboardContainer = styled.div`
    height: 100vh;
    width:100vw;
    background-color: white; /* Fundo branco */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const HeaderWrapper = styled.header`
    background-color: #333;
    color: white;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const HeaderTitle = styled.h1`
    font-size: 24px;
    margin: 0;
`;

export const ListWrapper = styled.div`
    margin-top: 20px;
    width: 100%;
    max-width: 600px;
`;

export const ListItem = styled.div`
    background-color: #f4f4f4;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const DeleteButton = styled.button`
    background-color: #f44336;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 14px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #d32f2f;
    }
`;