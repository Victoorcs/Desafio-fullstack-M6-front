import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../hooks/useAuth";
import { TContato, contatoSchema } from "../shemas/contatoSchema";
import { Container, ErrorMessage, Form, InnerContainer, Input, Label, SubmitButton, Title } from "./CreateContatoStyle";




interface CreateContactFormProps {
    onClose: () => void
}

const CreateContatoForm: React.FC<CreateContactFormProps> = ({ onClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<TContato>({
        resolver: zodResolver(contatoSchema),
    })

    const { createContato } = useAuth();

    const onSubmit = (data: TContato) => {
        createContato(data)
        onClose()
    }

    return (
        <Container>
            <InnerContainer>
                <Title>Registrar novo contato</Title>
            </InnerContainer>
            <InnerContainer>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Label htmlFor="name">Nome</Label>
                    <Input type="text" placeholder="Name" {...register("name")} />
                    {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

                    <Label htmlFor="email">Email</Label>
                    <Input type="email" placeholder="example@.com" {...register("email")} />
                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

                    <Label htmlFor="telefone">Telefone</Label>
                    <Input type="text" placeholder="88988888888" {...register("telefone")} />
                    {errors.telefone && <ErrorMessage>{errors.telefone.message}</ErrorMessage>}

                    <SubmitButton type="submit">Criar</SubmitButton>
                </Form>
            </InnerContainer>
        </Container>
    )
}

export default CreateContatoForm;