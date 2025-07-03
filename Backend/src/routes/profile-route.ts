import { Router } from "express";
import { authMiddleware } from "../midlewares/thread-middle";
import { getProfileController, updateProfileController } from "../controllers/profile-controller";
import { upload } from "../midlewares/multer";



const profileRouter = Router()

profileRouter.get('/profile', authMiddleware, getProfileController)

profileRouter.patch('/profile', authMiddleware, upload.single("image"), updateProfileController)

export default profileRouter