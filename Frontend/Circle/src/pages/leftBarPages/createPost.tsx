import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { ImagePlus } from "lucide-react";
import { useState } from "react";

export function CreatePost() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Tombol Create Post */}
      <Button
        className="bg-green-600 rounded-2xl px-16 mt-5"
        onClick={() => setOpen(true)}
      >
        Create Post
      </Button>

      {/* Modal Post */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-[#1b221c] text-white border border-gray-700 shadow-2xl p-4 max-w-xl w-full rounded-xl">
          <div className="flex items-start gap-3">
            <Avatar className="mt-1">
              <AvatarImage src="/img/av9.jpg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <Textarea
                placeholder="What is happening?!"
                className="bg-transparent text-lg border-none resize-none min-h-[100px] placeholder:text-gray-500"
              />
            </div>
          </div>

          <div className="flex items-center border-t border-gray-500 justify-between mt-4 pt-4">
            <Button variant="ghost" className="hover:bg-transparent">
              <ImagePlus className="size-6 text-green-500 " />
            </Button>

            <Button className="rounded-full bg-green-600 text-white hover:bg-green-700 px-5">
              Post
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
