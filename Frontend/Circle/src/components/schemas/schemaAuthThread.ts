import z from "zod";
import type { typeProfile } from "./schemaAuthProfile";


export const schemaAuthThread = z.object({
  description: z.string().min(1, "Tidak boleh kosong!"),
  image: z.string().nullable(), // gambar bisa null
});

export type schemaAuthThreadDTO = z.infer<typeof schemaAuthThread>;


//untuk multer
export interface formData {
  description: string,
  image: File | null,
}

// Representasi satu thread dari backend
export interface typeThread {
    id: string;
  description: string;       // sesuai Zod schema dan DB
  image?: string | null;      // gambar (nullable)
  createdAt: string;         // waktu pembuatan
  author : typeAuthor
}

// Bentuk response JSON dari backend nia ingat
export interface typeThreadPayload {
  message: string;
  data: typeThread[];
}

export interface typeAuthor {
    id :string
    username: string
    profile: typeProfile
}

