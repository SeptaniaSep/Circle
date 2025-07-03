import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ImagePlus } from "lucide-react";
import { useCreateThread } from "@/components/hooks/useThreadCreate";

import type React from "react";
import { useState } from "react";

export function FormPost() {
  const [text, setText] = useState("");
  const [image, setImage] = useState<string | null>("");
  const { mutate: createThread, isPending } = useCreateThread();
  const [file, setFile] = useState<File | null>(null); //handel u d kirirm ke be

  const handlePost = () => {
    if (!file) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("description", text);
    formData.append("image", file);

    createThread(formData); // pastikan useCreateThread-nya menerima FormData
    setText("");
    setImage("");
    setFile(null);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);

    // preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(selectedFile);

    // const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   const file = e.target.files?.[0];
    //   if (!file) return;

    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     setImage(reader.result as string);
    //   };
    //   reader.readAsDataURL(file);
  };
  return (
    <div>
      <div className="flex p-4 rounded-lg mt-4 mb-4 gap-2 items-center">
        <Avatar>
          <AvatarImage className="rounded-full" src="public/img/av9.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Input
          className="w-full p-3 rounded-lg border-none text-white "
          placeholder="Whats happening?!"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* Gambar */}
        <label htmlFor="file-upload">
          <ImagePlus size={25} className="text-green-600 cursor-pointer" />
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />

        <Button
          onClick={handlePost}
          disabled={isPending}
          className="mt-1 bg-green-600 text-white px-3 py-1.5 rounded-4xl"
        >
          {isPending ? "Posting..." : "Post"}
        </Button>
      </div>

      {/* Preview Gambar */}
      {image && (
        <div className="relative ml-20 mb-6 w-fit">
          <img
            src={image}
            alt="preview"
            className="rounded-lg max-h-52 object-cover"
          />
          <button
            onClick={() => setImage("")}
            className="absolute top-2 -right-2 hover:font-extrabold cursor-pointer text-white rounded-full px-5 text-sm"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
