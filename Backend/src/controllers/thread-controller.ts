import { Request, Response, NextFunction } from "express";
import { ThreedSchema } from "../validation/threed-validation";
import { createThreed } from "../services/thread-services";

export async function createThreedController(
  req: Request,
  res: Response,
) {
  try {
    const userId = (req as any).user?.id;
    if (!userId) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }
    const threads = ThreedSchema.validate(req.body);
    if (!threads) {
      res.status(400).json({
        error: "Invalid input",
      });
      return;
    }

    const { authorId, description, image } = req.body;
    const newThread = await createThreed({
      authorId: userId,
      description,
      image
    });

    res.status(201).json({ message: "Thread succes uploaded", newThread });
  } catch (error) {
    res.status(500).json({ error: "Failed post Thread" });
  }
}

