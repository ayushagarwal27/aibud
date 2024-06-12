"use client";
import React, { useState } from "react";
import ShadcnSelect from "@/components/ShadcnSelect";
import * as designData from "./designData";
import DesignCard from "@/components/DesignCard";

const dummyData = {
  image_url:
    "https://oaidalleapiprodscus.blob.core.windows.net/private/org-ejWcgJVk0c4njm99EH1aZITJ/user-2wzuSeC1BwlDasyFA1x6aNWg/img-5q8zYQUnBFexyo4woDOsMe2Z.png?st=2024-06-11T16%3A52%3A36Z&se=2024-06-11T18%3A52%3A36Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-06-10T18%3A40%3A31Z&ske=2024-06-11T18%3A40%3A31Z&sks=b&skv=2023-11-03&sig=ChC3YG6QXFVc/kLgIz8FcBajYlEFJrX00CduYkBhwmQ%3D",
  inspiration: "Arablic",
  color: "Green",
  type: "Cocktail dress",
};
("https://oaidalleapiprodscus.blob.core.windows.net/private/org-ejWcgJVk0c4njm99EH1aZITJ/user-2wzuSeC1BwlDasyFA1x6aNWg/img-M7b87tr9QDWpeyKW0unOmAzJ.png?st=2024-06-11T14%3A39%3A40Z&se=2024-06-11T16%3A39%3A40Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-06-10T18%3A38%3A13Z&ske=2024-06-11T18%3A38%3A13Z&sks=b&skv=2023-11-03&sig=NNn7oV93v%2BFgfDm97q0dX4fjasYaWEQZymPfsRuZl/s%3D");

interface DressData {
  image_url: string;
  inspiration: string;
  type: string;
  color: string;
}

const DesignPage = () => {
  const [designInput, setDesignInput] = useState({});
  const [dressData, setDressData] = useState<DressData | null>(null);
  async function handleSubmit() {
    const res = await fetch("/api/design", {
      method: "POST",
      body: JSON.stringify(designInput),
    });
    const data = await res.json();
    setDressData(data.data);
  }

  if (dressData) {
    return (
      <div className={"h-screen w-screen flex justify-center items-center "}>
        <DesignCard
          src={dressData.image_url}
          alt={"image"}
          placeholderImg={
            "https://png.pngtree.com/png-clipart/20190905/original/pngtree-beautiful-red-tube-top-dress-png-image_4508160.jpg"
          }
          color={dressData.color}
          inspiration={dressData.inspiration}
          dressType={dressData.type}
        />
      </div>
    );
  }

  return (
    <div>
      <div className={"flex gap-4 "}>
        <ShadcnSelect
          options={designData.itemsTypes.map((item) => ({
            label: item,
            value: item,
          }))}
          placeholder={"Select your dress"}
          onChange={(value) => setDesignInput({ ...designInput, type: value })}
        />{" "}
        <ShadcnSelect
          options={designData.inspirations.map((inspiration) => ({
            label: inspiration,
            value: inspiration,
          }))}
          placeholder={"Select Style"}
          onChange={(value) =>
            setDesignInput({ ...designInput, inspiration: value })
          }
        />{" "}
        <ShadcnSelect
          options={designData.colors.map((colors) => ({
            label: colors,
            value: colors,
          }))}
          placeholder={"Select Color"}
          onChange={(value) => setDesignInput({ ...designInput, color: value })}
        />
      </div>
      <button onClick={handleSubmit} className={"bg-blue-500 p-2 rounded m-4"}>
        Submit
      </button>
    </div>
  );
};

export default DesignPage;
