import { z } from "zod";

export const contatoResponseSchema = z.object({
    id: z.number(),
    name: z.string().max(200),
    email: z.string().email().max(45),
    telefone: z.string().max(10),
    createdAt: z.string()
})

export const contatoSchema = contatoResponseSchema.omit({
    id: true,
    createdAt: true,
})

export type TContatoResponse = z.infer<typeof contatoResponseSchema>
export type TContato = z.infer<typeof contatoSchema>