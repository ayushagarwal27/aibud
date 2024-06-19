import React, { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface ShadCnDialogProps {
  setShowModal: (val: boolean) => void;
}

const ShadCnDialog: FC<ShadCnDialogProps> = ({ setShowModal }) => {
  return (
    <Dialog open={true} onOpenChange={(val) => setShowModal(val)}>
      <DialogTrigger />
      <DialogContent className={"bg-black text-white"}>
        <DialogHeader>
          <DialogTitle> Hey there 🙂</DialogTitle>
          <DialogDescription className={"text-gray-100"}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <div className={"flex flex-col gap-2 mt-4"}>
              <p className={"leading-loosed"}>
                Thank you for trying out the initial version of the{" "}
                <span className={"text-pink-600 font-bold "}>Ai Bud</span> 🌟
              </p>
              <p>
                This app will soon be released with many exciting features. 🚀
              </p>
              <p className={"leading-1"}>
                {`If you'd like to receive an update when this app launches,
                  please consider providing your email for a reminder. 📧`}
              </p>
            </div>
            <form onSubmit={() => {}}>
              <Input
                type="email"
                placeholder="Email"
                className={"mt-6 mb-4 border-2 border-violet-300 bg-gray-700"}
              />
              <button
                className={
                  "bg-gradient-to-r from-fuchsia-700 to-rose-700 hover:from-fuchsia-600  hover:to-rose-600  px-4 py-2 rounded-lg text-white"
                }
                type={"submit"}
              >
                Submit
              </button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ShadCnDialog;
