import { Request, Response } from "express";
import { ThreedSchema } from "../validation/thraed-validation";
import { CreateThreed, EditByIdThread, GetAllThread, GetByIdThread, GetByIdUser} from "../services/thread-service";

// CREATE THREAD 
export async function createThreedController(req: Request, res: Response) {
  try {
    // 1. Auth check
    const userId = (req as any).user?.id;
    if (!userId) {
      res.status(401).json({ error: "Unauthorized. User not found!" });
      return 
    }

    // 2. Ambil filename dari multer.diskStorage
    const filename = req.file?.filename ?? null;

    // 3. Validasi dengan Joi (masukkan image ke objek yang divalidasi)
    await ThreedSchema.validateAsync({
      description: req.body.description,
      image:       filename,
    });

    // 4. Simpan ke database (CreateThreed hanya menyimpan filename atau null)
    const saved = await CreateThreed({
      authorId:   userId,
      description: req.body.description,
      image:       filename,
    });

    // 5. Bangun URL untuk dikirim ke client
    const imageUrl = saved.image
      ? `${req.protocol}://${req.get("host")}/uploads/${saved.image}`
      : null;

    // 6. Kirim response lengkap dengan imageUrl
    res.status(201).json({
      success: true,
      data: {
        description: saved.description,
        image: imageUrl,
      },
      
    });
    return 
    
  } catch (err: any) {
    if (err.isJoi) {
       res.status(400).json({ error: err.message });
       return
    }
    res.status(500).json({ error: "Failed to post thread" });
    return 
  }
}


// GET THREAD ALL => HOME
export async function getAllThreadController(req: Request, res: Response) {
  try {

    const userId = (req as any).user?.id;

    console.log("cek login", userId);
    

    if (!userId) {
    res.status(401).json({ message: "Unauthorized" });
      return 
    }

    const threads = await GetAllThread(userId);

    res.status(200).json({
      message: "All threads by user",
      data: threads
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error
    });
  }
}

// GET THREAD BY ID USER => POST ALL
export async function getThreadByIdUserController(req: Request, res: Response) {
  try {
    // const { id } = req.params;
    const authorId = (req as any).user?.id;

    if (!authorId) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const thread = await GetByIdUser(authorId);

    if (!thread) {
      res.status(404).json({ message: "Thread not found or unauthorized" });
      return;
    }

    res.json({
      message: "Thread found",
      data: thread
    });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err });
  }
}

// GET THREAD BY ID THREAD => DETAIL THREAD
export async function getThreadByIdThreadController(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const thread = await GetByIdThread(id);

    if (!thread) {
      return res.status(404).json({ message: "Thread not found" });
    }

    return res.status(200).json({
      message: "Thread found",
      data: thread
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: (err as Error).message
    });
  }
}


// EDIT THREAD 
export async function editThreadByIdController(req: Request, res: Response) {
  try {
    
    const { id } = req.params;
    const userId = (req as any).user?.id;
    const { description, image } = req.body

    if (!userId) {
    res.status(401).json({ message: "Unauthorized" });
      return 
    }

    const edit = await EditByIdThread(id, userId, {description, image});

     if(!edit) {
      res.status(404).json({message: "Thread not found or unauthorized"})
     }

    res.status(200).json({
      message: "Update Successfully yeey..",
      data: edit
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error
    });
  }
}


