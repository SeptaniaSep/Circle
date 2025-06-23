import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  schemaAuthRegister,
  type schemaAutRegisterhDTO,
} from "../schemas/schemaAuthRegister";
import { zodResolver } from "@hookform/resolvers/zod";

export default function RegisterPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<schemaAutRegisterhDTO>({
    mode: "onChange",
    resolver: zodResolver(schemaAuthRegister),
  });

  const handleRegister = (data: schemaAutRegisterhDTO) => {
    navigate("/login");
    console.log("data", data);
  };

  return (
    <div className="min-h-screen flex mt-10 justify-center bg-[#111] text-white">
      <div className="w-full max-w-md px-6 py-8">
        <h1 className="text-4xl font-semibold text-green-600 mb-1">circle</h1>
        <h2 className="text-xl font-semibold mb-6">Create account Circle</h2>

        <form className="space-y-3" onSubmit={handleSubmit(handleRegister)}>
          <Input
            type="text"
            placeholder="Full Name*"
            className="border border-gray-600 text-white"
            {...register("username")}
          />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
          <Input
            type="email"
            placeholder="Email*"
            className="border border-gray-600 text-white"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <Input
            type="password"
            placeholder="Password*"
            className="border border-gray-600 text-white"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <Button
            type="submit"
            className="w-full rounded-full bg-green-600 hover:bg-green-700"
          >
            Create
          </Button>
        </form>

        <p className="mt-4 text-sm text-gray-400">
          Already have account?{" "}
          <Link to="/login" className="text-green-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
