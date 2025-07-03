import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import type { schemaAuthLoginDTO } from "../schemas/schemaAuthLogin";
import { api } from "@/lib/api";
import { toast } from "sonner";

type LoginResponse = {
  token: string
}

export function useLogin() {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({

    mutationFn: async (data: schemaAuthLoginDTO) => {
      const res = await api.post<LoginResponse>("/login", data);
      const token = res.data.token;
      
      return token;
    },
    onSuccess: (data) => {
      Cookie.set("token", data);
      navigate("/");
      toast.success("Login Succes!!");
    },

    onError: (error) => {
      if (axios.isAxiosErrorr(error)) {
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