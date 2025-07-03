import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import Cookies from "js-cookie";
import type { typeThread, typeThreadPayload } from "../schemas/schemaAuthThread";


export function useGetThreads() {
  return useQuery<typeThreadPayload, Error>({
    queryKey: ["threads"],
    queryFn: async () => {
      const token = Cookies.get("token");
      if (!token) {
        throw new Error("Token tidak ditemukan. Harap login kembali.");
      }

      const res = await api.get<typeThreadPayload>("/threads", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      return res.data;
    },
    
  });
}


export function useGetThreadsByAuthorId() {
  return useQuery<typeThreadPayload, Error>({
    queryKey: ["threads"],
    queryFn: async () => {
      const token = Cookies.get("token");
      if (!token) {
        throw new Error("Token tidak ditemukan. Harap login kembali.");
      }

      const res = await api.get<typeThreadPayload>("/threadbi", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    },
  });
}



export function useGetThreadByIdThread(authorId: string) {
  return useQuery<typeThread, Error>({
    queryKey: ["thread", authorId],
    queryFn: async () => {
      console.log("🔍 Memulai fetch thread untuk authorId:", authorId);

      const token = Cookies.get("token");
      if (!token) {
        throw new Error("Token tidak ditemukan. Harap login kembali.");
      }

      const res = await api.get<typeThread>(`/thread/${authorId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
        

      return res.data;
    },
    enabled: !!authorId,
  });
}






