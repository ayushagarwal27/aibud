import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MoodSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-[250px] bg-amber-200">
        <SelectValue placeholder="Select your mood" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className={"bg-pink-200"}>
          <SelectLabel>Mood</SelectLabel>
          <SelectItem value="happy">🙂 Happy</SelectItem>
          <SelectItem value="banana">😔 Sad</SelectItem>
          <SelectItem value="blueberry">Excited</SelectItem>
          <SelectItem value="grapes">Grumpy</SelectItem>
          <SelectItem value="pineapple">Fine</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default MoodSelect;
