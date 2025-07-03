import { Router } from "express";
import { createThreedController, editThreadByIdController, getAllThreadController, getThreadByIdUserController} from "../controllers/thread-controller";
import { authMiddleware } from "../midlewares/thread-middle";
import { upload } from "../midlewares/multer";


const threadRouter = Router()

threadRouter.get('/threads', authMiddleware, getAllThreadController)

threadRouter.get('/threadbi', authMiddleware, getThreadByIdUserController)

threadRouter.post('/thread',  authMiddleware, upload.single("image"), createThreedController)

threadRouter.put('/thread', authMiddleware, editThreadByIdController)

export default threadRouter