import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC } from "react";

interface ShadcnSelectProps {
  options: { label: string; value: string }[];
  placeholder: string;
  onChange: (value: string) => void;
}

const ShadcnSelect: FC<ShadcnSelectProps> = ({
  placeholder,
  options,
  onChange,
}) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="max-w-[250px] font-semibold py-2 px-4 rounded border-transparent">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem value={option.value} key={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ShadcnSelect;
