import { compare, hash } from "bcrypt"
import { prisma } from "../connections/prismaClien"
import { signToken, TokenPayload } from "../utils/jwt"
import createHTTPError from "http-errors"



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

export async function GetProfile(id: string){
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      username: true,
      email: true,
      profile: {
        select: {
          fullname: true,
          avatar: true,
          banner: true,
          bio: true,
        },
      },
    },
  });

  if (!user) return null;

  return {
    username: user.username,
    email: user.email,
    fullname: user.profile?.fullname || "",
    avatar: user.profile?.avatar || "",
    banner: user.profile?.banner || "",
    bio: user.profile?.bio || "",
  };
}




export async function loginService(data: auth) {
    const user = await prisma.user.findUnique({
        where: { email: data.email }
        
    })

    if (!user) throw new Error("Email is not registered")
        // console.log("Login data:", data);

        const isValid = await compare(data.password, user.password)
    if (!isValid) {
        throw createHTTPError(401, "wrong password")
    }

        const payload: TokenPayload = { id: user.id }
        const token = signToken(payload)
        return token
        
}