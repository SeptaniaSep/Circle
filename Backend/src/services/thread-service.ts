
import { prisma } from "../connections/prismaClien"

interface thread {
    description: string,
    image?: string | null,
    authorId: string ,
}

export async function CreateThreed(data: thread) {
    const thread = await prisma.thread.create({
        data: { 
            authorId: data.authorId,
            description: data.description,
            image: data.image ?? null,
        }
    })

    return {
        description: thread.description,
        image: thread.image 
    }
}

export async function GetAllThread(authorId:string){
    return await prisma.thread.findMany({ 

        //where itu mencari spesific
        // where: {
        //     authorId
        // },

        orderBy: {
            createdAt: "desc",
        },

        
        include:{
            author:{
                select:{
                    id: true,
                    username: true,
                    profile: {
                        select: {
                            avatar: true,
                            fullname: true,
                        }
                    }

                },
            },
            
        }
        
    })
}


export async function GetByIdThread(id: string){
    return await prisma.thread.findUnique({
        where: {id},
        include:{
            author:{
                select:{
                    id: true,
                    username: true

                }
            }
        }
        
    })
}


export async function GetByIdUser(authorId:string){
    return await prisma.thread.findMany({ 

        // where itu mencari spesific
        where: {
            authorId
        },

        orderBy: {
            createdAt: "desc",
        },

        
        include:{
            author:{
                select:{
                    id: true,
                    username: true

                }
            }
        }
        
    })
}



export async function EditByIdThread(
  id: string,
  authorId: string,
  data: { description?: string; image?: string | null }
) {
  // untuk Cek apakah thread-nya milik user ini
  const thread = await prisma.thread.findFirst({
    where: { id, authorId },
  });

  // dia marah kalo tidak ada atau bukan milik user
  if (!thread) return null; 

  return await prisma.thread.update({
    where: { id },
    data,
    include: {
      author: {
        select: {
          id: true,
          username: true,
        },
      },
    },
  });
}