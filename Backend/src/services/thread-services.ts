
import { prisma } from "../connections/prismaClien"

interface thread {
    description: string,
    image?: string[]
    authorId: string
}

export async function createThreed(data: thread) {
    const thread = await prisma.thread.create({
        data: { 
            authorId: data.authorId,
            description: data.description,
            image: data.image ? JSON.stringify(data.image) : null,
        }
    })

    return {
        description: thread.description,
        image: thread.image ? JSON.stringify(data.image) : []
    }
}