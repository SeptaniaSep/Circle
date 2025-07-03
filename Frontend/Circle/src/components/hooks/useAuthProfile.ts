import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie"
import { api } from "@/lib/api";
import type { typeProfilePayload } from "../schemas/schemaAuthProfile";




// Fungsi update profile pakai FormData
export async function updateProfile(userId: string, data: FormData) {
  try {
    const response = await api.put(`/profile/${userId}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error: any) {
    console.error("❌ Error saat update profile:", error.response?.data || error.message);
    throw error.response?.data || { message: "Gagal update profile" };
  }
}

// Hook react-query untuk update profile
export function useProfile() {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData: FormData) => {
      // ✅ Ambil userId dari localStorage
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      const userId = user?.id;

      if (!userId) {
        throw new Error("User ID tidak ditemukan. Harap login ulang.");
      }

      return await updateProfile(userId, formData);
    },

    onSuccess: () => {
      toast.success("Profil berhasil diperbarui!");
      navigate("/profile");
    },

    onError: (error: any) => {
      const message =
        error?.response?.data?.message || "Terjadi kesalahan saat update profile";
      toast.error(message);
      console.error("❌ Update profile error:", error);
    },
  });

  return { mutate, isPending };
}


// export function getProfile() {
//     const {data: profile, isLoading: loading, error } = useQuery({
//     queryKey: ["Myrofile"],
//     queryFn: async () => {
//           const token = Cookies.get("token");
    
//           if (!token) {
//             throw new Error("Token tidak ditemukan. Harap login kembali.");
//           }
    
//           try {
//             const res = await api.get("/profile", {
//               headers: {
//                 Authorization: `Bearer ${token}`,
//               },
//             });
    
//             // console.log("cek errorrr", res)
            
//             return res.data; //[{}]
//           } catch (err: any) {
//             if (axios.isAxiosError(err)) {
//               const message = err.response?.data?.message || "Gagal ambil data dari server.";
//               throw new Error(message);
//             // toast.error(message)
    
//             } else {
//               throw new Error("Terjadi error tak terduga.");
//             }
//           }
          

//         },  

//     })
//     return {profile, loading, error}
// }

export function useGetProfile() {
  return useQuery<typeProfilePayload, Error>({
    
    queryKey: ["profile"],
    queryFn: async () => {
      const token = Cookies.get("token")
      if (!token) {
        throw new Error("Token tidak ditemukan, Harap login...")

      }
      const res = await api.get<typeProfilePayload>("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      return res.data
    }
  })
}