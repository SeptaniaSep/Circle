import { NextFunction, Request, Response } from "express";
import { registerSchema } from "../validation/auth_validation";
import { registerService } from "../services/auth_service";

export async function registerController(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        await registerSchema.validateAsync(req.body)

        const user = await registerService(req.body)
        res.status(201).json(user)
    } catch (error: any) {
        next(error)
    }
}

