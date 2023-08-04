import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center;
    padding: 0 1.5rem;
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    max-width: 20rem;
`;

const Title = styled.h2`
    margin-top: 1rem;
    text-align: center;
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.25;
    color: #1f2937;
`;

const Form = styled.form`
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const Label = styled.label`
    font-size: 0.875rem;
    font-weight: medium;
    line-height: 1.25;
    color: #374151;
`;

const Input = styled.input`
    padding: 0.5rem;
    width: 100%;
    border-radius: 0.25rem;
    border: 1px solid #d1d5db;
    font-size: 0.875rem;
    line-height: 1.25;
    color: #1f2937;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    &:focus {
        outline: none;
        border-color: #6d28d9;
    }
`;

const ErrorMessage = styled.p`
    color: #e53e3e;
    font-size: 0.75rem;
`;

const SubmitButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0.375rem;
    border-radius: 0.25rem;
    background-color: #4f46e5;
    color: white;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.25;
    cursor: pointer;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    transition: background-color 0.2s;
    &:hover {
        background-color: #4338ca;
    }
    &:focus-visible {
        outline: 2px solid #4f46e5;
    }
`;

export {Container,InnerContainer,Title,Form,Label,Input,ErrorMessage,SubmitButton}