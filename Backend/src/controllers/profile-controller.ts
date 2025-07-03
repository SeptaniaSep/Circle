import { GetProfile, UpdateProfile } from "../services/profile-service";
import { Request, Response } from "express";

export async function getProfileController(req: Request, res: Response) {
  try {
    const userId = (req as any).user?.id;

    if (!userId) {
       res.status(401).json({ message: "Unauthorized" });
       return
    }

    const profile = await GetProfile(userId);

    res.status(200).json({
      message: "Data Profile",
      data: profile
    });
    return 

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
    });
    return 
  }
}


export async function updateProfileController(req: Request, res: Response) {
  try {
    
    const { id } = req.params;
    const userId = (req as any).user?.id;

    

    if (!userId) {
    res.status(401).json({ message: "Unauthorized" });
      return 
    }
    
    const edit = await UpdateProfile(userId, req.body);

    
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

