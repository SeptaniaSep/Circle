import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import type { schemaAuthLoginDTO } from "../schemas/schemaAuthLogin";
import { api } from "@/util/api";
import { toast } from "sonner";


export function useLogin() {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: schemaAuthLoginDTO) => {
      // console.log("cek")
      
      const res = await api.post<schemaAuthLoginDTO>("/login", data);
      
      // console.log("cek 2")
      const token = res.data.token;
      
      return token;
    },
    onSuccess: (data) => {
      Cookie.set("token", data);
      navigate("/");
      toast.success("Login Succes!!");
    },

    onError: (error) => {
      if (axios.isAxiosError(error)) {
        console.log(error);
        
        const message = error.response?.data.message || "Unknow Error";
        toast.error(message);
      } else {
        console.error("Unexpected Error :", error);
      }
    },
  });
  return { mutate, isPending };
}