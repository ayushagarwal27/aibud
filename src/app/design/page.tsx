"use client";
import React, { useState } from "react";
import ShadcnSelect from "@/components/ShadcnSelect";
import * as designData from "./designData";
import DesignCard from "@/components/DesignCard";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import ShadCnDialog from "@/components/ShadCnDialog";
import CircularProgress from "@/components/CircularProgress";
import { handleError } from "@/lib/utils";

const dummyData = {
  image_url:
    "https://plus.unsplash.com/premium_photo-1690217748547-5a9141cb9763?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  inspiration: "Arablic",
  color: "Green",
  type: "Cocktail dress",
};

interface DressData {
  image_url: string;
  inspiration: string;
  type: string;
  color: string;
}

const DesignPage = () => {
  const [designInput, setDesignInput] = useState({});
  const [dressData, setDressData] = useState<DressData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  async function handleSubmit() {
    setIsLoading(true);
    const res = await fetch("/api/design", {
      method: "POST",
      body: JSON.stringify(designInput),
    });
    if (!res.ok) {
      setIsLoading(false);
      await res.text().then((text) => {
        if (text.replaceAll(`"`, "") === "Limit Exceeded") {
          setShowModal(true);
        } else {
          handleError();
        }
      });
      return;
    }
    const data = await res.json();
    setDressData(data.data);
    setIsLoading(false);
  }

  return (
    <>
      {showModal && <ShadCnDialog setShowModal={setShowModal} />}
      <BackgroundGradientAnimation
        firstColor={"54, 20, 46"}
        fifthColor={"156, 36, 104"}
        interactive={false}
        className={"min-h-svh"}
        containerClassName={"fixed pointer-events-none -z-10 inset-0"}
      />
      <div className={"flex flex-col gap-4 mb-[100px]"}>
        {" "}
        <div
          className={
            "flex flex-col  lg:flex-row gap-4 w-full justify-center pt-[60px] mt-[60px]"
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
            disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={isLoading}
          />
          <button
            onClick={handleSubmit}
            disabled={isLoading || Object.entries(designInput).length < 3}
            className="disabled:opacity-60 disabled:cursor-no-drop relative self-start items-center justify-center inline-block  px-5 py-[12px] overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group mx-auto lg:mx-0"
          >
            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease" />
            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
            </span>
            <span className="relative text-white text-[16px]">Submit</span>
          </button>
        </div>
        {isLoading && (
          <div
            className={
              "flex flex-col w-ful mt-16 md:mt-52 justify-center items-center"
            }
          >
            <CircularProgress />
          </div>
        )}
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
