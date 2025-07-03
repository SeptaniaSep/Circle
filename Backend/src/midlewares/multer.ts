import multer from "multer";
import path from "path";
import { Request } from "express";

// Konfigurasi tempat penyimpanan file
const storage = multer.diskStorage({
  
  // Folder tujuan upload (disarankan di luar src kalau untuk produksi)
  destination: path.join(__dirname, "../../uploads"),

  // Atur nama file yang disimpan (biar unik dan aman)
  filename: (_req, file, cb) => {
    // Ganti spasi dengan "-" dan lowercase untuk nama file yang aman
    const cleanName = file.originalname.replace(/\s+/g, "-").toLowerCase();
    // Contoh hasil: 1720123456789-profile-picture.png
    cb(null, `${Date.now()}-${cleanName}`);
  },
});

// Validasi jenis file yang diperbolehkan
const fileFilter = (
  _req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  // Ambil ekstensi file, misalnya ".jpg"
  const ext = path.extname(file.originalname).toLowerCase();

  // Cek apakah ekstensi termasuk yang diperbolehkan
  if ([".jpg", ".jpeg", ".png"].includes(ext)) {
    cb(null, true); // File diterima
  } else {
    // Tolak file selain image, kirim pesan error
    cb(new Error("Only .jpg, .jpeg, .png Jangan yang lain yak..."));
  }
};

// Export middleware upload yang bisa langsung dipakai di route
export const upload = multer({
  storage,      // tempat simpan + nama file
  fileFilter,   // validasi tipe file
  limits: {
    fileSize: 2 * 1024 * 1024, // Maksimal 2MB
  },
});
