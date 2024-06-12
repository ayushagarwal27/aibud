import React, { FC } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MoodTypes } from "@/app/mood/page";
interface MoodSelect {
  handleMoodSelect: (selectedMood: MoodTypes) => void;
}

const MoodSelect: FC<MoodSelect> = ({ handleMoodSelect }) => {
  return (
    <Select onValueChange={(value) => handleMoodSelect(value as MoodTypes)}>
      <SelectTrigger className="w-[250px] bg-amber-200 mt-[80px] mb-[20px]">
        <SelectValue placeholder="Select your mood" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className={"bg-pink-200"}>
          <SelectLabel>Mood</SelectLabel>
          <SelectItem value="happy">🙂 Happy</SelectItem>
          <SelectItem value="sad">😔 Sad</SelectItem>
          <SelectItem value="excited">Excited</SelectItem>
          <SelectItem value="fine">Fine</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default MoodSelect;
