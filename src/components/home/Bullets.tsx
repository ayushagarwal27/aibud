"use client";
import React, { useRef } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Bullets = () => {
  const bullet1Ref = useRef(null);
  const bullet2Ref = useRef(null);

  useGSAP(
    () => {
      gsap.from(bullet1Ref.current, {
        y: 100,
        autoAlpha: 0,
        duration: 0.8,
        delay: 0.5,
      }); // <-- automatically reverted
      gsap.from(bullet2Ref.current, {
        y: 100,
        autoAlpha: 0,
        duration: 0.8,
        delay: 0.6,
      }); // <-- automatically reverted
    },
    { dependencies: [] }
  );

  return (
    <div className="mt-8 space-y-5 text-emerald-950  md:text-xl">
      <div className={"flex gap-4 font-sans invisible"} ref={bullet1Ref}>
        <FaRegCircleCheck size={44} className={"-mt-[1px] hidden md:block"} />
        <p className="flex items-center -mx-2">
          <span className="mx-2 ">
            Explore personalized 🎬 movie, 📺 TV show, 📚 novel, and 🎵 song
            recommendations tailored to your current vibe.
          </span>
        </p>
      </div>
      <div className={"flex gap-4 invisible"} ref={bullet2Ref}>
        <FaRegCircleCheck size={52} className={"-mt-[4px]  hidden md:block"} />
        <p className="flex items-center -mx-2 font-sans">
          <span className="mx-2 ">
            <span className={"font-bold text-violet-950"}>
              Dress Designer:{" "}
            </span>{" "}
            Design your own virtual dress 👗 with AI-generated images based on
            your preferred style, dress type, and color palette.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Bullets;
