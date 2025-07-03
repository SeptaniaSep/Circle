import { Prisma } from "@prisma/client"
import { prisma } from "../connections/prismaClien"


interface profile {
    userId: string
    username: string
    fullname?: string
    avatar?: string
    banner?: string
    bio?: string
}

export async function GetProfile(id: string){
    const user = await prisma.user.findUnique({ 

        // where itu mencari spesific
        where: {id},
        select: {
            username: true,
            profile: {
                select: {
                    fullname: true,
                    avatar: true,
                    banner: true,
                    bio: true,
                }
            }
        }
        
    })
    if (!user) return null
    return {
         username: user.username,
         fullname: user.profile?.fullname,
         avatar: user.profile?.avatar,
         banner: user.profile?.banner,
         bio: user.profile?.bio,

    }
}

// tanpa username => user
export async function UpdateProfile(userId: string, data: profile) {
    try {

        //get profile by userId
        const profile = await prisma.profile.findUnique({
            where: {userId},
            select: {
                fullname:true
            }
        })
        let updated: any = null;
        if (profile) {
            updated = await prisma.profile.update({
                where: { userId },
                data: {
                    fullname: data.fullname,
                    avatar: data.avatar,
                    banner: data.banner,
                    bio: data.bio
                }
            });
        } else { 
            const user = await prisma.profile.create({
                data : {
                    fullname: data.fullname as string,
                    avatar: data.avatar as string,
                    banner: data.banner as string,
                    bio: data.bio as string,
                    userId: userId,
                }
            })
            // create baru di mana userIdnya dari paramater
            
            // //KASIH ERROR untuk update error sebelum create
        }

        // ini kelanjutan dari updateProfile => username
        const updateUsername = await prisma.user.update({
            where: { id: userId },
            data: {
                username: data.username,
            }

        })


    return {
        username: updateUsername.username,
        fullname: updated.fullname,
        avatar: updated.avatar,
        banner: updated.banner,
        bio: updated.bio
    };

 } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw {
        statusCode: 400,
        message: `Prisma error: ${error.message}`,
      };
    }

    throw {
      statusCode: 500,
      message: "Terjadi kesalahan internal saat update profile",
      error
    };
  }
}


// ==INI SEBELUMNYA== //
// export async function UpdateProfile(req: Request, res: Response) {
//   const userId = req.params.id;
//   const data: profile = req.body;

//   try {
//     const existingProfile = await prisma.profile.findUnique({
//       where: { userId },
//       select: { fullname: true },
//     });

//     let updated: any = null;

//     if (existingProfile) {
//       // Update jika sudah ada
//       try {
//         updated = await prisma.profile.update({
//           where: { userId },
//           data: {
//             fullname: data.fullname,
//             avatar: data.avatar,
//             banner: data.banner,
//             bio: data.bio,
//           },
//         });
//       } catch (err) {
//         return res.status(500).json({
//           status: false,
//           message: "Gagal update profile yang sudah ada",
//           error: err,
//         });
//       }
//     } else {

//       // Create jika belum ada userId
//       try {
//         updated = await prisma.profile.create({
//           data: {
//             fullname: data.fullname as string,
//             avatar: data.avatar as string,
//             banner: data.banner as string,
//             bio: data.bio as string,
//             userId: userId,
//           },
//         });
//       } catch (err) {
//         return res.status(500).json({
//           status: false,
//           message: "Gagal membuat profile baru",
//           error: err,
//         });
//       }
//     }

//     // Update username user
//     const updateUsername = await prisma.user.update({
//       where: { id: userId },
//       data: { username: data.username },
//     });

//     return res.status(200).json({
//       status: true,
//       message: "Profile berhasil diperbarui",
//       data: {
//         username: updateUsername.username,
//         fullname: updated.fullname,
//         avatar: updated.avatar,
//         banner: updated.banner,
//         bio: updated.bio,
//       },
//     });

//   } catch (error: any) {
//     if (error instanceof Prisma.PrismaClientKnownRequestError) {
//       return res.status(400).json({
//         status: false,
//         message: `Prisma error: ${error.message}`,
//       });
//     }

//     return res.status(500).json({
//       status: false,
//       message: "Terjadi kesalahan internal saat update profile",
//       error,
//     });
//   }
// }


// INI GET AFTER UPDATE
// export async function GetProfileAsUpdate(userId: string) {
//   const user = await prisma.user.findUnique({
//     where: { id: userId },
//     select: {
//       username: true,
//       profile: {
//         select: {
//           fullname: true,
//           avatar: true,
//           banner: true,
//           bio: true,
//         },
//       },
//     },
//   });

//   if (!user) return null;

//   return {
//     username: user.username,
//     fullname: user.profile?.fullname || "",
//     avatar: user.profile?.avatar || "",
//     banner: user.profile?.banner || "",
//     bio: user.profile?.bio || "",
//   };
// }


