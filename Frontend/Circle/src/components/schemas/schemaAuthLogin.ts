import z from "zod"

export const schemaAuthLogin = z.object({
    username: z.string().min(1, {message: "Username tidak falid!"}),
    password: z.string().min(1, {message: "Password salah!"})
})

export type schemaAuthDTO = z.infer<typeof schemaAuthLogin>