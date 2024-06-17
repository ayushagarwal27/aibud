"use client";
import React, { useState } from "react";
import ShadcnSelect from "@/components/ShadcnSelect";
import * as designData from "./designData";
import DesignCard from "@/components/DesignCard";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const dummyData = {
  image_url:
    "https://oaidalleapiprodscus.blob.core.windows.net/private/org-ejWcgJVk0c4njm99EH1aZITJ/user-2wzuSeC1BwlDasyFA1x6aNWg/img-e2mnr6StpOkZ19kUR0BtUXeA.png?st=2024-06-17T16%3A51%3A29Z&se=2024-06-17T18%3A51%3A29Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-06-17T16%3A05%3A27Z&ske=2024-06-18T16%3A05%3A27Z&sks=b&skv=2023-11-03&sig=DP7ZcjEzgl/GYR/2yKcfGj324V0RW3YNYwlm7xPRQ%2Bg%3D",
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
  const [dressData, setDressData] = useState<DressData | null>(dummyData);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit() {
    setIsLoading(true);
    const res = await fetch("/api/design", {
      method: "POST",
      body: JSON.stringify(designInput),
    });
    const data = await res.json();
    setDressData(data.data);
    setIsLoading(false);
  }

  if (isLoading) {
    return (
      <div className={"h-screen w-screen flex justify-center items-center "}>
        <p className={"text-2xl bg-white"}>Loading...</p>
      </div>
    );
  }

  // if (dressData) {
  //   return (
  //     <div className={"h-screen w-screen flex justify-center items-center "}>
  //       <DesignCard
  //         src={dressData.image_url}
  //         alt={"image"}
  //         placeholderImg={
  //           "https://png.pngtree.com/png-clipart/20190905/original/pngtree-beautiful-red-tube-top-dress-png-image_4508160.jpg"
  //         }
  //         color={dressData.color}
  //         inspiration={dressData.inspiration}
  //         dressType={dressData.type}
  //       />
  //     </div>
  //   );
  // }

  return (
    <>
      <BackgroundGradientAnimation
        firstColor={"54, 20, 46"}
        fifthColor={"156, 36, 104"}
        interactive={false}
        className={"min-h-svh"}
        containerClassName={"fixed pointer-events-none -z-10 inset-0"}
      />
      <div className={"flex flex-col gap-4"}>
        {" "}
        <div
          className={
            "flex flex-col md:flex-row gap-4 w-full justify-center pt-[60px] mt-[60px]"
          }
        >
          <ShadcnSelect
            options={designData.itemsTypes.map((item) => ({
              label: item,
              value: item,
            }))}
            placeholder={"Select your dress"}
            onChange={(value) =>
              setDesignInput({ ...designInput, type: value })
            }
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
            onChange={(value) =>
              setDesignInput({ ...designInput, color: value })
            }
          />
          <button
            onClick={handleSubmit}
            className="relative self-start items-center justify-center inline-block  px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
          >
            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease" />
            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
            </span>
            <span className="relative text-white text-[16px]">Submit</span>
          </button>
        </div>
        {dressData && (
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
        )}
      </div>
    </>
  );
};

export default DesignPage;
