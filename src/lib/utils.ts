import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "react-hot-toast";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleError = () => {
  toast.error("Something went wrong! Please try after some time."); // Displays a success message
};
