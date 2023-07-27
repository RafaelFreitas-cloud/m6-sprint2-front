import {z} from "zod"

export const schemaLogin = z.object({
    email: z.string().email("Deve ser um e-mail"),
    password: z.string().nonempty("Senha obrigatória")
})

export type TLoginData = z.infer<typeof schemaLogin>