import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface EditProfileModalProps {
  open: boolean;
  onClose: () => void;
  name: string;
  username: string;
  bio: string;
  avatar: string;
  banner: string;
  onSave: (data: {
    name: string;
    username: string;
    bio: string;
    avatarFile: File | null;
    bannerFile: File | null;
  }) => void;
}

export function EditProfileModal({
  open,
  onClose,
  name: initialName,
  username: initialUsername,
  bio: initialBio,
  avatar: initialAvatar,
  banner: initialBanner,
  onSave,
}: EditProfileModalProps) {
  const [name, setName] = useState(initialName);
  const [username, setUsername] = useState(initialUsername);
  const [bio, setBio] = useState(initialBio);

  const [avatarPreview, setAvatarPreview] = useState(initialAvatar);
  const [bannerPreview, setBannerPreview] = useState(initialBanner);

  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [bannerFile, setBannerFile] = useState<File | null>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setBannerFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSave({ name, username, bio, avatarFile, bannerFile });
    onClose();
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={onClose} >
      <DialogContent className="bg-[#1b221c] text-white ">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">

          {/* Banner Upload */}
          <div >
            <img
              src={bannerPreview}
              alt="banner"
              className="w-full h-50 object-cover rounded mb-2"
            />
            <Input
              type="file"
              accept="image/*"
              onChange={handleBannerChange}
              className="text-white  w-30 ml-125 border border-[#4e4e4e] cursor-pointer"
            />
          </div>

           {/* Avatar Upload */}
          <div className="ml-6 -mt-30">
            <div className="flex items-center gap-4">
              <img
              src={avatarPreview}
              alt="avatar"
              className="w-30 h-30 rounded-full mb-2 object-cover bg-[#1b221c]"
            />
            <Input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className=" text-white w-30 mt-14 border border-[#4e4e4e] cursor-pointer"
            />
            </div>
          </div>

          {/* Text Input */}
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-[#1a1a1a] text-white"
          />
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-[#1a1a1a] text-white"
          />
          <Textarea
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="bg-[#1a1a1a] text-white"
          />

          <button
            onClick={handleSave}
            className="mt-2 w-20 bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded-full"
          >
            Save
          </button>
        </div>
      </DialogContent>
    </Dialog>
    </div>
  );
}
