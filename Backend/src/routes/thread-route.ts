import { Router } from "express";
import * as userController from "../controllers/auth-controller";
import { createThreedController } from "../controllers/thread-controller";


const threadRouter = Router()

threadRouter.post('/thread', createThreedController)

export default threadRouter