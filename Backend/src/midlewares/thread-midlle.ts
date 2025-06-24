import { NextFunction } from "express";
import jwt, { decode, verify } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt";

export function authMiddleware(
    req: Request, 
    res: Response, 
    next: NextFunction
) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const decoded = verifyToken(token)
    (req as any).user = decoded as any
    next()
  } catch {
    return res.status(401).json({ message: "Invailid Token MU "})
    
  }
}