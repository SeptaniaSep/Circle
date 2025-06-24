import { compare, hash } from "bcrypt"
import { prisma } from "../connections/prismaClien"
import { signToken, TokenPayload } from "../utils/jwt"



interface auth {
    username: string
    email: string
    password: string
}

export async function registerService(data: auth) {
    const hashPassword = await hash(data.password, 10)

    const user = await prisma.user.create({
        data : {
            username: data.username,
            email: data.email,
            password: hashPassword,
        }
    })

    return user
}

export async function loginService(data: auth) {
    const user = await prisma.user.findUnique({
        where: { email: data.email }
    })
    if (!user) throw new Error("Email is not registered")

        const isValid = await compare(data.password, user.password)
    if (!isValid) throw new Error("Wrong password")

        const payload: TokenPayload = { id: user.id }
        const token = signToken(payload)
        return token

        
}