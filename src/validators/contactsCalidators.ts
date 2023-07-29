import {z} from "zod"

export const contactCreateSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
})

export const contactUpdateSchema = z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    
})

export type TContactCreateData = z.infer<typeof contactCreateSchema>

export type TContactUpdateData = z.infer<typeof contactUpdateSchema>