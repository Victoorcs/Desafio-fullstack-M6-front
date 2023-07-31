import {z} from 'zod';

export const schema = z.object({
    email: z.string().email("Deve ser um e-mail"),
    password: z.string().nonempty("Senha é obrigatória"),
    telefone:z.number()
})
export type RegisterData = z.infer<typeof schema>