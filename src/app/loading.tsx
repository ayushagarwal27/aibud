import React from "react";
import Loading from "@/components/ui/Loading";

const LoadingPage = () => {
  return (
    <div
      className={
        " bg-gradient-to-r from-[#e9d5ff] via-[#d8b4fe] to-[#c084fc] h-screen w-screen flex justify-center items-center"
      }
    >
      <Loading />
    </div>
  );
};

export default LoadingPage;
