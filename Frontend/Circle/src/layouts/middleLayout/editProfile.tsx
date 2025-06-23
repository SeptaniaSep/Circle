import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";
import { RiImageEditLine } from "react-icons/ri";
import { Textarea } from "@/components/ui/textarea";

interface EditProfileModalProps {
  open: boolean;
  onClose: () => void;
  name: string;
  username: string;
  bio: string;
  onSave: (data: { name: string; username: string; bio: string }) => void;
}

export function EditProfileModal({
  open,
  onClose,
  name,
  username,
  bio,
  onSave,
}: EditProfileModalProps) {
  const [formName, setFormName] = useState(name);
  const [formUsername, setFormUsername] = useState(username);
  const [formBio, setFormBio] = useState(bio);

  const handleSubmit = () => {
    onSave({ name: formName, username: formUsername, bio: formBio });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-[#0f0f0f] border border-gray-700 max-w-md">
        <DialogHeader>
          <div className="flex justify-between items-center mb-4">
            <DialogTitle className="text-white">Edit profile</DialogTitle>
            <button onClick={onClose}>
              <X className="text-gray-400 hover:text-white" />
            </button>
          </div>
        </DialogHeader>

        <div className="relative mb-4 h-24 rounded-lg bg-gradient-to-r from-pink-300 via-pink-500 to-pink-300"></div>

        <div className="w-20 h-20 mt-45 ml-8 rounded-full border-4 border-black bg-black overflow-hidden absolute -top-10 left-4">
          <img
            src="/public/img/av9.jpg"
            alt="Avatar"
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#1a1616aa] p-1.5 rounded-full shadow-md cursor-pointer group-hover:scale-110 transition">
            <RiImageEditLine className="text-white w-4 h-4" />
          </div>
        </div>

        <div className=" mt-6 space-y-3">
          <Input
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
            placeholder="Name"
            className="bg-[#1f1f1f] text-white border-gray-700"
          />
          <Input
            value={formUsername}
            onChange={(e) => setFormUsername(e.target.value)}
            placeholder="Username"
            className="bg-[#1f1f1f] text-white border-gray-700"
          />
          <Textarea
            value={formBio}
            onChange={(e) => setFormBio(e.target.value)}
            placeholder="Bio"
            className="bg-[#1f1f1f] text-white border-gray-700 h-20"
          />
        </div>

        <div className="flex justify-end">
          <Button
            onClick={handleSubmit}
            className=" mt-4 w-20  rounded-3xl bg-green-600 text-white hover:bg-green-700"
          >
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
