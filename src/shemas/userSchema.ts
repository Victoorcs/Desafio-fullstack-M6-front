import { z } from "zod";
import { contatoResponseSchema } from "./contatoSchema";



export const userSchema = z.object({
    name: z.string().max(200),
    email: z.string().email().max(45),
    password: z.string().max(120),
    telefone: z.string().max(10),
})

export const userResponseSchema = z.object({
    id: z.number(),
    name: z.string().max(200),
    email: z.string().email().max(45),
    telefone: z.string().max(10),
    createdAt: z.string(),
    contato: z.array(contatoResponseSchema),
})


export const loginSchema = z.object({
    email: z.string().max(45).email('Email Obrigatorio'),
    password: z.string().max(120).nonempty('Senha Obrigatoria')
})

export type TUserData = z.infer<typeof userSchema>
export type TUserResponseData = z.infer<typeof userResponseSchema>
export type TLoginData = z.infer<typeof loginSchema>