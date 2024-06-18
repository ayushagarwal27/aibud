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

const moodData = [
  { mood: "Happy", emoji: "😀" },
  { mood: "Sad", emoji: "😢" },
  { mood: "Excited", emoji: "🎉" },
  { mood: "Angry", emoji: "😡" },
  { mood: "Confused", emoji: "🤔" },
  { mood: "Content", emoji: "😌" },
  { mood: "Surprised", emoji: "😯" },
  { mood: "Anxious", emoji: "😬" },
  { mood: "Relaxed", emoji: "😌" },
  { mood: "Grateful", emoji: "🙏" },
  { mood: "Envious", emoji: "😒" },
  { mood: "Loving", emoji: "❤️" },
  { mood: "Hopeful", emoji: "🤞" },
  { mood: "Frustrated", emoji: "😤" },
  { mood: "Bored", emoji: "😑" },
  { mood: "Inspired", emoji: "💡" },
  { mood: "Giddy", emoji: "😄" },
  { mood: "Peaceful", emoji: "☮️" },
  { mood: "Melancholic", emoji: "😔" },
  { mood: "Amused", emoji: "😄" },
];

const MoodSelect: FC<MoodSelect> = ({ handleMoodSelect }) => {
  return (
    <Select onValueChange={(value) => handleMoodSelect(value as MoodTypes)}>
      <SelectTrigger className="w-[250px] bg-amber-100 mt-[80px] mb-[20px]">
        <SelectValue placeholder="Select your mood" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className={"bg-pink-200"}>
          <SelectLabel>Mood</SelectLabel>
          {moodData.map(({ mood, emoji }) => (
            <SelectItem value={mood} key={mood}>
              {emoji} {mood}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default MoodSelect;
