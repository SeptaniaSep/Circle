import { NextFunction, Request, Response } from "express";
import { loginSchema, registerSchema } from "../validation/auth-validation";
import { loginService, registerService } from "../services/auth_service";


// ==== Register ==== //
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


// ==== Login ==== //
export async function loginController(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        await loginSchema.validateAsync(req.body)

        const token = await loginService(req.body)
        res.status(200).json({message: "login berhasil", token})
    } catch (error: any) {
        next(error)
    }
}