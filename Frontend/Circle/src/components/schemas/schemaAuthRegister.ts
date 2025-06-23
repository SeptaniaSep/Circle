import z from "zod"

export const schemaAuthRegister = z.object({
    username: z.string().min(1, {message: "Username tidak falid!"}),
    email: z.string().min(1, {message: "Email tidak falid!"}),
    password: z.string().min(1, {message: "Password salah!"})
})

export type schemaAutRegisterhDTO = z.infer<typeof schemaAuthRegister>